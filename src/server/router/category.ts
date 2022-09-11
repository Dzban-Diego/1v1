import { createRouter } from './context'
import { prisma } from '../db/client'

export const categoryRouter = createRouter().query('.getAll', {
  async resolve({}) {
    return await prisma.category.findMany()
  },
})
