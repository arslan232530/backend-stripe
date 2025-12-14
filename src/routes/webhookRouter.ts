import express from "express";
import bodyParser from "body-parser";
import { stripeWebhook } from "../controllers/webhookController.js";

const router = express.Router();

// Stripe webhook requires raw body
router.post("/", bodyParser.raw({ type: "application/json" }), stripeWebhook);

export default router;
