import { type EventType } from "@prisma/client";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const entriesRouter = createTRPCRouter({
  getGuestTodayLog: publicProcedure
    .input(
      z.object({
        utc_string: z.string(),
      })
    )
    .query(({ input, ctx }) => {
      const today = new Date(input.utc_string);
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);

      return ctx.prisma.entry.findMany({
        where: {
          userId: null,
          createdAt: {
            gte: today,
            lt: tomorrow,
          },
        },
        include: {
          events: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    }),

  getTodayLog: protectedProcedure
    .input(
      z.object({
        utc_string: z.string(),
      })
    )
    .query(async ({ input, ctx }) => {
      const today = new Date(input.utc_string);
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);

      const user = await ctx.prisma.user.findUnique({
        where: {
          clerkId: ctx.auth?.userId,
        },
      });

      return ctx.prisma.entry.findMany({
        where: {
          userId: user?.id,
          createdAt: {
            gte: today,
            lt: tomorrow,
          },
        },
        include: {
          events: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    }),

  getGuestFirstEntry: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.entry.findFirst({
      where: {
        userId: null,
      },
      orderBy: {
        createdAt: "asc",
      },
    });
  }),

  getFirstEntry: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.prisma.user.findUnique({
      where: {
        clerkId: ctx.auth?.userId,
      },
    });

    return ctx.prisma.entry.findFirst({
      where: {
        userId: user?.id,
      },
      orderBy: {
        createdAt: "asc",
      },
    });
  }),

  createEntry: protectedProcedure
    .input(
      z.object({
        mood: z.number(),
        notes: z.string(),
        events: z.array(
          z.object({
            type: z.string(),
            name: z.string(),
          })
        ),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.prisma.user.findUnique({
        where: {
          clerkId: ctx.auth?.userId,
        },
      });
      await ctx.prisma.entry.create({
        data: {
          userId: user?.id,
          mood: input.mood,
          notes: input.notes,
          events: {
            create: input.events.map((event) => ({
              userId: user?.id,
              type: event.type as EventType,
              name: event.name,
            })),
          },
        },
      });
    }),

  createGuestEntry: publicProcedure
    .input(
      z.object({
        mood: z.number(),
        notes: z.string(),
        events: z.array(
          z.object({
            type: z.string(),
            name: z.string(),
          })
        ),
      })
    )
    .mutation(async ({ ctx, input }) => {
      console.log(input.events);

      await ctx.prisma.entry.create({
        data: {
          mood: input.mood,
          notes: input.notes,
          events: {
            create: input.events.map((event) => ({
              type: event.type as EventType,
              name: event.name,
            })),
          },
        },
      });
    }),

  deleteEntry: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.event.deleteMany({
        where: {
          entryId: input.id,
        },
      });

      return await ctx.prisma.entry.delete({
        where: { id: input.id },
      });
    }),

  deleteGuestEntry: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.event.deleteMany({
        where: {
          entryId: input.id,
        },
      });

      return await ctx.prisma.entry.delete({
        where: { id: input.id },
      });
    }),
});
