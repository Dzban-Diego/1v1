import { createRouter } from './context'
import { prisma } from '../db/client'

export const usersRouter = createRouter().query('.getAll', {
  async resolve({}) {
    return await prisma.user.findMany()
  },
})
