import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const recipes = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/recipes' }),
  schema: z.object({
    title: z.string(),
    ingredients: z.array(z.string()),
    steps: z.array(z.string()),
    prepTime: z.coerce.number(),
  }),
});

export const collections = {
  recipes,
};
