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
      select: {
        id: true,
        title: true,
        createdAt: true,
      },
      orderBy: { createdAt: "desc" },
    });
  }),

  getGuestEntries: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.journalEntry.findMany({
      where: {
        userId: null,
      },
      select: {
        id: true,
        title: true,
        createdAt: true,
      },
      orderBy: { createdAt: "desc" },
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

  getEntry: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const user = await ctx.prisma.user.findUnique({
        where: {
          clerkId: ctx.auth?.userId,
        },
      });

      try {
        const journalEntry = await ctx.prisma.journalEntry.findUnique({
          where: {
            userId: user?.id,
            id: input.id,
          },
        });

        if (!journalEntry) {
          // If no journal entry is found, throw a custom error
          throw new Error("Journal entry not found");
        }

        return journalEntry;
      } catch (error) {
        throw error;
      }
    }),

  getGuestEntry: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      try {
        const journalEntry = await ctx.prisma.journalEntry.findUnique({
          where: {
            id: input.id,
          },
        });

        if (!journalEntry) {
          // If no journal entry is found, throw a custom error
          throw new Error("Journal entry not found");
        }

        return journalEntry;
      } catch (error) {
        throw error;
      }
    }),

  deleteEntry: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.journalEntry.delete({
        where: { id: input.id },
      });
    }),

  deleteGuestEntry: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.journalEntry.delete({
        where: { id: input.id },
      });
    }),
});
