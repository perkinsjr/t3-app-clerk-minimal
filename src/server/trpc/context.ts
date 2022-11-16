import * as trpc from '@trpc/server'
import * as trpcNext from '@trpc/server/adapters/next'
import { getAuth, clerkClient } from '@clerk/nextjs/server'
import { User } from '@clerk/nextjs/dist/api'

interface userData {
  user: User | null
}
export const createContextInner = async ({ user }: userData) => {
  return { user }
}

export const createContext = async (
  opts: trpcNext.CreateNextContextOptions
) => {
  async function getUser() {
    const { userId } = getAuth(opts.req)
    const user = userId ? await clerkClient.users.getUser(userId) : null
    return user
  }

  const user = await getUser()

  return await createContextInner({ user })
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>
