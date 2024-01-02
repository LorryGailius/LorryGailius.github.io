import { defineCollection, z } from "astro:content";

export const collections = {
  projects: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      description: z.string(),
      image: z.string(),
      link: z.string(),
      tags: z.array(z.string()),
    }),
  }),
};
