import { type EventType } from "@prisma/client";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

const user_local_date = new Date();
const timezone_offset = user_local_date.getTimezoneOffset();
const user_UTC_date = new Date(
  user_local_date.getTime() - timezone_offset * 60000
);

const start_of_day = new Date(
  user_UTC_date.getFullYear(),
  user_UTC_date.getMonth(),
  user_UTC_date.getDate(),
  0,
  0,
  0,
  0
);

const end_of_day = new Date(user_UTC_date.getTime() + 24 * 60 * 60 * 1000);

export const entriesRouter = createTRPCRouter({
  getGuestTodayLog: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.entry.findMany({
      where: {
        createdAt: {
          gte: start_of_day,
          lt: end_of_day,
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
    const user = await ctx.prisma.user.findUnique({
      where: {
        clerkId: ctx.auth?.userId,
      },
    });

    return ctx.prisma.entry.findMany({
      where: {
        userId: user?.id,
        createdAt: {
          gte: start_of_day,
          lt: end_of_day,
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
