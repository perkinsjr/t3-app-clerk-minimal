import { authMiddleware } from "@clerk/nextjs/server";


export default authMiddleware(
  {
    ignoredRoutes: [],
    publicRoutes: ["/", "/api/trpc/example.hello"]
  }
);


// Stop Middleware running on static files
export const config = {
  matcher: [
    "/(.*?trpc.*?|(?!static|.*\\..*|_next|favicon.ico).*)",
    "/"
  ],
};
