import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    lists: defineCollection({
      type: 'data',
      source: '**.json',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        _icon: z.string(),
        created_at: z.string().optional(),
        items: z.array(z.object({
            id: z.string(),
            title: z.string(),
            content_text: z.string()
        }))
      })
    })
  }
})

