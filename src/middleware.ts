import { authMiddleware } from "@clerk/nextjs/server";


export default authMiddleware(
  {
    debug: true,
    ignoredRoutes: ["/api/trpc"],
    publicRoutes: ["/",]
  }
);


// Stop Middleware running on static files
export const config = {
  matcher: [
    "/(.*?trpc.*?|(?!static|.*\\..*|_next|favicon.ico).*)",
    "/"
  ],
};
