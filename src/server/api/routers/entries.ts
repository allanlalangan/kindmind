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

  createGuestEntry: publicProcedure
    .input(z.object({ content: z.string(), title: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.journalEntry.create({
        data: {
          content: input.content,
          title: input.title,
        },
      });
    }),

  createEntry: protectedProcedure
    .input(z.object({ content: z.string(), title: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.prisma.user.findUnique({
        where: {
          clerkId: ctx.auth?.userId,
        },
      });

      return ctx.prisma.journalEntry.create({
        data: {
          content: input.content,
          title: input.title,
          userId: user?.id,
        },
      });
    }),
});
