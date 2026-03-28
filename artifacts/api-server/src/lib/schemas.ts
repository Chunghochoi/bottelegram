import { z } from "zod";

export const HealthCheckResponse = z.object({
  status: z.literal("ok"),
});

export const StartBotBody = z.object({
  videoUrl: z.string().url(),
  workers: z.number().int().positive().max(1000).optional(),
});

export const StartBotResponse = z.object({
  success: z.boolean(),
  message: z.string(),
});

export const StopBotResponse = z.object({
  success: z.boolean(),
  message: z.string(),
});

export const GetBotStatsResponse = z.object({
  isRunning: z.boolean(),
  videoUrl: z.string().optional(),
  videoId: z.string().optional(),
  totalViews: z.number(),
  elapsedTime: z.number(),
  viewsPerSecond: z.number(),
  viewsPerMinute: z.number(),
  viewsPerHour: z.number(),
  successRate: z.number(),
  successfulRequests: z.number(),
  failedRequests: z.number(),
  peakSpeed: z.number(),
  startedAt: z.number().optional(),
});

export const GetBotStatusResponse = z.object({
  isRunning: z.boolean(),
  videoUrl: z.string().optional(),
  videoId: z.string().optional(),
  startedAt: z.number().optional(),
});
