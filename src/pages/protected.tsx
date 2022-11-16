import { trpc } from '../utils/trpc'

export default function IndexPage() {
  const hello = trpc.protected.hello.useQuery()

  if (!hello.data) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <div>
      <h1>{hello.data.secret}</h1>
    </div>
  )
}
