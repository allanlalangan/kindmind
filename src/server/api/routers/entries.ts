import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const entriesRouter = createTRPCRouter({
  createEntry: protectedProcedure
    .input(
      z.object({
        mood: z.number().nullable(),
        notes: z.string(),
        self_care_events: z.array(z.string()),
        activity_events: z.array(z.string()),
        work_events: z.array(z.string()),
        health_events: z.array(z.string()),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.prisma.user.findUnique({
        where: {
          clerkId: ctx.auth?.userId,
        },
      });
      console.log(input);
    }),

  createGuestEntry: publicProcedure
    .input(
      z.object({
        mood: z.number().nullable(),
        notes: z.string(),
        self_care_events: z.array(z.string()),
        activity_events: z.array(z.string()),
        work_events: z.array(z.string()),
        health_events: z.array(z.string()),
      })
    )
    .mutation(({ ctx, input }) => {
      console.log(input);
    }),
});
