export const paths = {
  root: () => `/`,
  recipe: (slug: string) => `/rezept/${slug}/`,
  ingredients: {
    root: () => `/zutaten/`,
    ingredient: (slug: string) => `/zutaten/${slug}/`,
  },
} as const;
