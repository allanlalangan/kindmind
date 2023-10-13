import { type EventType } from "@prisma/client";
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
            name: z.string(),
          })
        ),
      })
    )
    .mutation(({ ctx, input }) => {
      console.log(input.events);
    }),
  // events.forEach((event_type) => {
  //   event_type.selected.forEach((event_name) => {
  //     console.log(event_name);
  //   });
  // });
});
