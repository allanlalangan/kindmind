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
        events: z.array(
          z.object({
            type: z.string(),
            selected: z.array(z.string()),
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
      console.log(input);
    }),

  createGuestEntry: publicProcedure
    .input(
      z.object({
        mood: z.number().nullable(),
        notes: z.string(),
        events: z.array(
          z.object({
            type: z.string(),
            selected: z.array(z.string()),
          })
        ),
      })
    )
    .mutation(({ ctx, input }) => {
      const events = input.events.filter((event) => event.selected.length > 0);
      console.log(events);
    }),
});
