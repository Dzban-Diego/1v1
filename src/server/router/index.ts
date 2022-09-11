// src/server/router/index.ts
import { createRouter } from './context'
import superjson from 'superjson'

import { pointsRouter } from './points'
import { storyRouter } from './story'
import { categoryRouter } from './category'
import { usersRouter } from './users'

export const appRouter = createRouter()
  .transformer(superjson)
  .merge('points', pointsRouter)
  .merge('story', storyRouter)
  .merge('category', categoryRouter)
  .merge('users', usersRouter)

// export type definition of API
export type AppRouter = typeof appRouter
