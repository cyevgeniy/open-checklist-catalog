import { defineCollection, defineContentConfig, z } from '@nuxt/content'
import type { Checklist } from 'open-checklists'
import { toZod } from 'tozod'

const schema: toZod<Checklist> = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  _icon: z.string(),
  created_at: z.string().optional(),
  authors: z.array(z.object({
    name: z.string(),
    url: z.string().optional(),
    avatar: z.string().optional()
  })).optional(),
  items: z.array(z.object({
    id: z.string(),
    title: z.string(),
    content_text: z.string().optional(),
    blocking: z.boolean().optional(),
    attachments: z.array(z.object({
      url: z.string(),
      mime_type: z.string(),
      alt: z.string().optional()
    })).optional()
  }))
})


export default defineContentConfig({
  collections: {
    lists: defineCollection({
      type: 'data',
      source: '**.json',
      schema,
    })
  }
})

