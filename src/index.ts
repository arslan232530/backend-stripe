import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import cors from "cors";
import orderRoutes from "./routes/orderRouter.js";

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
app.use(express.json());
app.use(cors());
// Payment routes
app.use("/api/payment", paymentRoutes);
app.use("/api/orders", orderRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
