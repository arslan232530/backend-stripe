import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import cors from "cors";
import orderRoutes from "./routes/orderRouter.js";
import webhookRoutes from "./routes/webhookRouter.js";

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

app.use(cors());

app.use("/webhook", webhookRoutes); // FIRST

app.use(express.json());

// Payment routes
app.use("/api/payment", paymentRoutes);
app.use("/api/orders", orderRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
