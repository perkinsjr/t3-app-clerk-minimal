import { router } from '../trpc'
import { exampleRouter } from './example'
import { protectedRouter } from './protected'
export const appRouter = router({
  example: exampleRouter,
  protected: protectedRouter
})

// export type definition of API
export type AppRouter = typeof appRouter
