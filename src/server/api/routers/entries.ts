import { type EventType } from "@prisma/client";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const entriesRouter = createTRPCRouter({
  getGuestTodayLog: publicProcedure.query(({ ctx }) => {
    const now = new Date();
    const today = new Date(now);
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    return ctx.prisma.entry.findMany({
      where: {
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

  getTodayLog: protectedProcedure.query(async ({ ctx }) => {
    const now = new Date();
    const today = new Date(now);
    today.setHours(0, 0, 0, 0);
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
  // events.forEach((event_type) => {
  //   event_type.selected.forEach((event_name) => {
  //     console.log(event_name);
  //   });
  // });
});
