// @ts-check
import { z } from 'zod'

export const serverSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']),
  CLERK_JWT_KEY: z.string(),
  CLERK_API_KEY: z.string()
})

export const clientSchema = z.object({
  NEXT_PUBLIC_CLERK_FRONTEND_API: z.string()
})

/**
 * @type {{ [k in keyof z.infer<typeof clientSchema>]: z.infer<typeof clientSchema>[k] | undefined }}
 */
export const clientEnv = {
  NEXT_PUBLIC_CLERK_FRONTEND_API: process.env.NEXT_PUBLIC_CLERK_FRONTEND_API
}
