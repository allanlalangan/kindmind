import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const entriesRouter = createTRPCRouter({
  getAll: protectedProcedure.query(async ({ ctx }) => {
    console.log(ctx.auth);

    const user = await ctx.prisma.user.findUnique({
      where: {
        clerkId: ctx.auth?.userId,
      },
    });

    return ctx.prisma.journalEntry.findMany({
      where: {
        userId: user?.id,
      },
    });
  }),

  getGuestEntries: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.journalEntry.findMany({
      where: {
        userId: null,
      },
    });
  }),
});
