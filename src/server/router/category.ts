import { createRouter } from './context'
import { prisma } from '../db/client'
import { z } from 'zod'

export const categoryRouter = createRouter()
  .query('.getAll', {
    async resolve({}) {
      return await prisma.category.findMany()
    },
  })
  .mutation('.create', {
    input: z.object({
      name: z.string(),
    }),
    async resolve({ input }) {
      return await prisma.category.create({
        data: {
          ...input,
        },
      })
    },
  })
