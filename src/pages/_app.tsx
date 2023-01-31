import { type AppType } from "next/app";
import { useRouter } from "next/router";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { api } from "../utils/api";

import "../styles/globals.css";

const publicPages = ["/", "/sign-in/[[...index]]", "/sign-up/[[...index]]"];

const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <ClerkProvider {...pageProps}>
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
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
