import { trpc } from '../utils/trpc'
import Link from 'next/link'

export default function IndexPage() {
  const hello = trpc.example.hello.useQuery({ text: 'from Clerk' })

  if (!hello.data) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <div>
      <div>
        <h1>{hello.data.greeting}</h1>
        <Link href="/protected">Check out a protected procedure</Link>
      </div>
    </div>
  )
}
