import { z, defineCollection } from 'astro:content';

const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        short: z.string(),
        tags: z.array(z.string()),
        image: z.string(),
    }),
});

export const collections = {
    'posts': postsCollection
}
