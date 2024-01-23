import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/nextjs/middleware for more information about configuring your middleware
export default authMiddleware({
  publicRoutes: [
    "/",
    "/dashboard",
    "/today",
    "/journal",
    "/journal/new",
    "/journal/entry/(.*)",
    "/journal/emotions",
    "/journal/emotions/new",
    "/journal/habits",
    "/journal/habits/new",
    "/api/webhooks/user",
    "/api/trpc/journal.getGuestEntries",
    "/api/trpc/journal.getGuestEntry",
    "/api/trpc/journal.getTodayGuestEntry",
    "/api/trpc/journal.createGuestEntry",
    "/api/trpc/journal.updateGuestEntry",
    "/api/trpc/journal.deleteGuestEntry",
    "/api/trpc/entries.createGuestEntry",
    "/api/trpc/entries.getGuestFirstEntry,entries.getGuestTodayLog",
    "/api/trpc/entries.getGuestFirstEntry,emotions.getGuestRecent,entries.getGuestTodayLog",
    "/api/trpc/entries.getGuestTodayLog",
    "/api/trpc/entries.getGuestFirstEntry",
    "/api/trpc/entries.getGuestTodayLog,entries.getGuestFirstEntry",
    "/api/trpc/entries.deleteGuestEntry",
    "/api/trpc/emotions.createGuestEmotionEntry",
    "/api/trpc/emotions.getGuestEmotionsForDay",
    "/api/trpc/emotions.getGuestRecent",
  ],
  ignoredRoutes: ["/api/webhooks/user"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
