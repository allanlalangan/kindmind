import { type EventType } from "@prisma/client";
import { start } from "repl";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

const now = new Date();

export const entriesRouter = createTRPCRouter({
  getGuestTodayLog: publicProcedure
    .input(
      z.object({
        utc_string: z.string(),
        timezone_offset: z.number(),
      })
    )
    .query(({ input, ctx }) => {
      const utcMidnight = new Date(input.utc_string);
      const start_of_next_day = new Date(utcMidnight);
      start_of_next_day.setDate(start_of_next_day.getDate() + 1);

      now.setHours(0, 0, 0, 0);
      now.setMinutes(now.getMinutes() - input.timezone_offset);
      const today = new Date(now.getTime() + input.timezone_offset * 60 * 1000);
      now.setDate(now.getDate() + 1);
      const tomorrow = new Date(
        now.getTime() + input.timezone_offset * 60 * 1000
      );

      console.log(utcMidnight, start_of_next_day);
      return ctx.prisma.entry.findMany({
        where: {
          createdAt: {
            gte: utcMidnight,
            lt: start_of_next_day,
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
        timezone_offset: z.number(),
      })
    )
    .query(async ({ input, ctx }) => {
      const utcMidnight = new Date(input.utc_string);
      const start_of_next_day = new Date(utcMidnight);
      start_of_next_day.setDate(start_of_next_day.getDate() + 1);

      now.setHours(0, 0, 0, 0);
      now.setMinutes(now.getMinutes() - input.timezone_offset);
      const today = new Date(now.getTime() + input.timezone_offset * 60 * 1000);
      now.setDate(now.getDate() + 1);
      const tomorrow = new Date(
        now.getTime() + input.timezone_offset * 60 * 1000
      );

      const user = await ctx.prisma.user.findUnique({
        where: {
          clerkId: ctx.auth?.userId,
        },
      });

      return ctx.prisma.entry.findMany({
        where: {
          userId: user?.id,
          createdAt: {
            gte: utcMidnight,
            lt: start_of_next_day,
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
