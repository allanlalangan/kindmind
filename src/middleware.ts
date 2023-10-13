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
    "/api/trpc/journal.getGuestEntries",
    "/api/trpc/journal.getGuestEntry",
    "/api/trpc/journal.getTodayGuestEntry",
    "/api/trpc/journal.createGuestEntry",
    "/api/trpc/journal.updateGuestEntry",
    "/api/trpc/journal.deleteGuestEntry",
    "/api/trpc/entries.createGuestEntry",
  ],
  ignoredRoutes: ["/api/webhooks/user"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
