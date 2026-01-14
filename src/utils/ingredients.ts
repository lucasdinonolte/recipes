import { getCollection } from 'astro:content';
import { parseIngredient } from 'parse-ingredient';
import slugify from 'slugify';

import { normalizeIngredient, germanUnits } from '@/constants/ingredients';
import { capitalize } from '@/utils/strings';

export interface Ingredient {
  name: string;
  recipes: string[]; // recipe slugs that use this ingredient
  count: number;
}

export function parseRawIngredient(ingredientStr: string) {
  const parsed = parseIngredient(ingredientStr.toLowerCase(), {
    additionalUOMs: germanUnits,
  });

  let ingredientName = parsed[0]?.description || ingredientStr;
  return normalizeIngredient(ingredientName);
};

export function ingredientSlug(ingredientName: string): string {
  return slugify(ingredientName, { lower: true, strict: true });
};

export async function getAllIngredients(): Promise<Ingredient[]> {
  const recipes = await getCollection('recipes');
  const ingredientMap = new Map<string, Set<string>>();

  recipes.forEach(recipe => {
    recipe.data.ingredients.forEach(ing => {
      try {
        const canonicalName = parseRawIngredient(ing);

        if (canonicalName) {
          if (!ingredientMap.has(canonicalName)) {
            ingredientMap.set(canonicalName, new Set());
          }
          ingredientMap.get(canonicalName)!.add(recipe.id);
        }
      } catch (e) {
        console.warn(`Failed to parse ingredient: ${ing}`);
      }
    });
  });

  // Convert to array and sort by usage count
  return Array.from(ingredientMap.entries())
    .map(([name, recipeIds]) => ({
      name: capitalize(name),
      slug: ingredientSlug(name),
      recipes: Array.from(recipeIds),
      count: recipeIds.size,
    }))
    .sort((a, b) => b.count - a.count);
}
