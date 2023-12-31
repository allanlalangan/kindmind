import { createTRPCRouter } from "~/server/api/trpc";
import { journalRouter } from "./routers/journal";
import { entriesRouter } from "./routers/entries";
import { emotionsRouter } from "./routers/emotions";
/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  journal: journalRouter,
  entries: entriesRouter,
  emotions: emotionsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
