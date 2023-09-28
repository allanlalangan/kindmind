import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/nextjs/middleware for more information about configuring your middleware
export default authMiddleware({
  publicRoutes: [
    "/",
    "/dashboard",
    "/journal",
    "/journal/(.*)",
    "/journal/new",
    "/api/trpc/entries.getGuestEntries",
    "/api/trpc/entries.getGuestEntry",
    "/api/trpc/entries.getTodayGuestEntry",
    "/api/trpc/entries.createGuestEntry",
    "/api/trpc/entries.updateGuestEntry",
    "/api/trpc/entries.deleteGuestEntry",
  ],
  ignoredRoutes: ["/api/webhooks/user"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
