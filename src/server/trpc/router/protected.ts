import { router, protectedProcedure } from '../trpc'

export const protectedRouter = router({
  hello: protectedProcedure.query(({ ctx }) => {
    return {
      secret: `${ctx.user?.firstName} is using a protected procedure`
    }
  })
})
