import { createRouter } from './context'
import { z } from 'zod'
import { prisma } from '../db/client'

export const pointsRouter = createRouter()
  .query('.getAll', {
    async resolve({}) {
      const users = await prisma.user.findMany({
        select: {
          name: true,
          id: true,
          storyGained: {
            select: {
              points: true,
            },
          },
        },
      })

      const summedUsers = users.map((user) => {
        let points = 0

        user.storyGained.forEach((point) => {
          points += point.points
        })

        return {
          name: user.name,
          id: user.id,
          points,
        }
      })

      if (!summedUsers[0] || !summedUsers[1]) {
        return
      }

      const finalUsers: {
        1: {
          name: string
          id: number
          points: number
        }
        2: {
          name: string
          id: number
          points: number
        }
      } = {
        1: summedUsers[0],
        2: summedUsers[1],
      }

      return finalUsers
    },
  })
  .mutation('.getAll', {
    async resolve({}) {
      const users = await prisma.user.findMany({
        select: {
          name: true,
          id: true,
          storyGained: {
            select: {
              points: true,
            },
          },
        },
      })

      const summedUsers = users.map((user) => {
        let points = 0

        user.storyGained.forEach((point) => {
          points += point.points
        })

        return {
          name: user.name,
          id: user.id,
          points,
        }
      })

      if (!summedUsers[0] || !summedUsers[1]) {
        return
      }

      const finalUsers: {
        1: {
          name: string
          id: number
          points: number
        }
        2: {
          name: string
          id: number
          points: number
        }
      } = {
        1: summedUsers[0],
        2: summedUsers[1],
      }

      return finalUsers
    },
  })
  .mutation('.create', {
    input: z.object({
      points: z.number(),
      forId: z.number(),
      categoryID: z.number(),
      description: z.string(),
    }),
    async resolve({ input }) {
      const createPoints = prisma.story.create({
        data: {
          ...input,
          confirmed: false,
          authorId: 1,
        },
      })
      return createPoints
    },
  })
