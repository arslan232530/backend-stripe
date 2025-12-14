import Stripe from "stripe";
import Order from "../models/order.js";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2025-11-17.clover",
});
export const stripeWebhook = async (req, res) => {
    const sig = req.headers["stripe-signature"];
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
    let event;
    try {
        // Verify the webhook signature
        event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    }
    catch (err) {
        console.log("Webhook signature verification failed.", err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }
    // Handle the checkout session completed event
    if (event.type === "checkout.session.completed") {
        const session = event.data.object;
        // Save order in MongoDB
        await Order.create({
            items: session.metadata?.items ? JSON.parse(session.metadata.items) : [],
            totalAmount: session.amount_total / 100,
            paymentStatus: "paid",
        });
        console.log("Order saved successfully via webhook");
    }
    res.status(200).json({ received: true });
};
//# sourceMappingURL=webhookController.js.map