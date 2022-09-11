import { createRouter } from './context'
import { prisma } from '../db/client'

export const storyRouter = createRouter()
  .mutation('.getAll', {
    async resolve({}) {
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
