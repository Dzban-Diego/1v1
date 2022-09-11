import { createRouter } from './context'
import { z } from 'zod'
import { prisma } from '../db/client'
import category from '../../pages/api/category'

export const storyRouter = createRouter()
  .mutation('.getAll', {
    async resolve({ input }) {
      const story = await prisma.story.findMany({
        select: {
          id: true,
          forId: true,
          points: true,
          description: true,
          category: {
            select: {
              name: true,
            },
          },
        },
      })
      return story.reverse()
    },
  })
  .query('getAll', {
    async resolve({ ctx }) {
      return await ctx.prisma.user.findMany()
    },
  })
