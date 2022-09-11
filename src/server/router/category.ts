import { createRouter } from './context'
import { prisma } from '../db/client'

export const categoryRouter = createRouter().query('.getAll', {
  async resolve({ input }) {
    return await prisma.category.findMany()
  },
})
