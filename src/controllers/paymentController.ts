import Stripe from "stripe";
import type { Request, Response } from "express";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-11-17.clover",
});

interface CartItem {
  price: number;
  quantity: number;
}

interface RequestBody {
  items: CartItem[];
}

export const createPaymentIntent = async (
  req: Request<any, any, RequestBody>,
  res: Response
) => {
  try {
    const { items } = req.body;

    // Calculate total amount in cents
    const amount =
      items.reduce((total, item) => total + item.price * item.quantity, 0) *
      100; // convert to cents

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    //console.log(error);
    res.status(500).json({ error: "Payment Intent creation failed" });
  }
};
