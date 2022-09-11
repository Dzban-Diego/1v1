import { createRouter } from './context'
import { prisma } from '../db/client'

export const usersRouter = createRouter().query('.getAll', {
  async resolve({ input }) {
    return await prisma.user.findMany()
  },
})
