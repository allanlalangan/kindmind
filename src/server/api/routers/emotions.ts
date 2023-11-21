import { type CoreEmotionType } from "@prisma/client";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const emotionsRouter = createTRPCRouter({
  createEmotionEntry: protectedProcedure
    .input(
      z.object({
        emotion: z.string(),
        core_emotion: z.string(),
        intensity: z.number(),
        notes: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.prisma.user.findUnique({
        where: {
          clerkId: ctx.auth?.userId,
        },
      });

      await ctx.prisma.emotionEntry.create({
        data: {
          userId: user?.id,
          name: input.emotion,
          core_emotion: input.core_emotion as CoreEmotionType,
          intensity: input.intensity,
          notes: input.notes,
        },
      });
    }),

  createGuestEmotionEntry: publicProcedure
    .input(
      z.object({
        emotion: z.string(),
        core_emotion: z.string(),
        intensity: z.number(),
        notes: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      console.log(input);
      await ctx.prisma.emotionEntry.create({
        data: {
          name: input.emotion,
          core_emotion: input.core_emotion as CoreEmotionType,
          intensity: input.intensity,
          notes: input.notes,
        },
      });
    }),
});
