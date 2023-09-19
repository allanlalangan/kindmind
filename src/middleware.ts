import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/nextjs/middleware for more information about configuring your middleware
export default authMiddleware({
  publicRoutes: [
    "/",
    "/dashboard",
    "/dashboard/journal",
    "/dashboard/journal/(.*)",
    "/dashboard/journal/new",
    "/api/trpc/entries.getGuestEntries",
    "/api/trpc/entries.createGuestEntry",
  ],
  ignoredRoutes: ["/api/webhooks/user"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
