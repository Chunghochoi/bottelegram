 import { Router, type IRouter } from "express";
 import { viewBot } from "../lib/viewBot.js";
 import {
   StartBotBody,
   GetBotStatsResponse,
   GetBotStatusResponse,
   StartBotResponse,
   StopBotResponse,
} from "../lib/schemas";
 
 const router: IRouter = Router();
 
const INVALID_START_BODY_MESSAGE = "Invalid request body: videoUrl is required";

 router.post("/start", async (req, res) => {
   const parsed = StartBotBody.safeParse(req.body);
   if (!parsed.success) {
    res.status(400).json({ error: INVALID_START_BODY_MESSAGE });
     return;
   }
 
   const { videoUrl, workers } = parsed.data;
   const result = await viewBot.start(videoUrl, workers ?? 300);
 
   const response = StartBotResponse.parse(result);
   res.json(response);
 });
 
 router.post("/stop", (_req, res) => {
   const result = viewBot.stop();
   const response = StopBotResponse.parse(result);
   res.json(response);
 });
 
 router.get("/stats", (_req, res) => {
   const stats = viewBot.getStats();
   const response = GetBotStatsResponse.parse(stats);
   res.json(response);
 });
 
 router.get("/status", (_req, res) => {
   const status = viewBot.getStatus();
   const response = GetBotStatusResponse.parse(status);
    });
