import type { Request, Response } from "express";
import Order from "../models/order.js";

export const saveOrder = async (req: Request, res: Response) => {
  try {
    const { items, totalAmount, paymentStatus } = req.body;

    const order = await Order.create({
      items,
      totalAmount,
      paymentStatus,
    });

    res.status(201).json({ order });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to save order" });
  }
};
