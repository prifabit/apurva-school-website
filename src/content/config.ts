import { defineCollection, z } from 'astro:content';

const pagesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title_en: z.string(),
        title_mr: z.string(),
        body_en: z.string(),
        body_mr: z.string(),
    }),
});

const galleryCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title_en: z.string(),
        title_mr: z.string(),
        image: z.string(),
        category: z.enum(['Events', 'Activities', 'Campus', 'Therapy']),
    }),
});

const downloadsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title_en: z.string(),
        title_mr: z.string(),
        file: z.string(),
    }),
});

export const collections = {
    'pages': pagesCollection,
    'gallery': galleryCollection,
    'downloads': downloadsCollection,
};
