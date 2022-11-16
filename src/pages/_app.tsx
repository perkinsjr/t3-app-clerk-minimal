import { type AppType } from 'next/app'
import Layout from '../components/layout'
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut
} from '@clerk/nextjs'
import { trpc } from '../utils/trpc'
import { useRouter } from 'next/router'

const publicPages = ['/', '/sign-in/[[...index]]', '/sign-up/[[...index]]']

const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter()
  return (
    <ClerkProvider {...pageProps}>
      <Layout>
        {publicPages.includes(router.pathname) ? (
          <Component {...pageProps} />
        ) : (
          <>
            <SignedIn>
              <Component {...pageProps} />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        )}
      </Layout>
    </ClerkProvider>
  )
}

export default trpc.withTRPC(MyApp)
