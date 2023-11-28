import { type CoreEmotionType } from "@prisma/client";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const emotionsRouter = createTRPCRouter({
  getGuestRecent: publicProcedure
    .input(
      z.object({
        utc_string: z.string(),
      })
    )
    .query(({ input, ctx }) => {
      const today = new Date(input.utc_string);
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);

      return ctx.prisma.emotionEntry.findMany({
        where: {
          userId: null,
          createdAt: {
            gte: today,
            lt: tomorrow,
          },
        },
        take: 5,
        orderBy: {
          createdAt: "desc",
        },
        select: {
          createdAt: true,
          name: true,
          core_emotion: true,
        },
      });
    }),

  getRecent: protectedProcedure
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

      return ctx.prisma.emotionEntry.findMany({
        where: {
          userId: user?.id,
          createdAt: {
            gte: today,
            lt: tomorrow,
          },
        },
        take: 5,
        orderBy: {
          createdAt: "desc",
        },
        select: {
          createdAt: true,
          name: true,
          core_emotion: true,
        },
      });
    }),

  getGuestEmotionsForDay: publicProcedure
    .input(
      z.object({
        utc_string: z.string(),
      })
    )
    .query(({ input, ctx }) => {
      const today = new Date(input.utc_string);
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);

      return ctx.prisma.emotionEntry.findMany({
        where: {
          userId: null,
          createdAt: {
            gte: today,
            lt: tomorrow,
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    }),

  getEmotionsForDay: protectedProcedure
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

      return ctx.prisma.emotionEntry.findMany({
        where: {
          userId: user?.id,
          createdAt: {
            gte: today,
            lt: tomorrow,
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    }),

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
