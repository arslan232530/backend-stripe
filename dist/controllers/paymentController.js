import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2025-11-17.clover",
});
export const createPaymentIntent = async (req, res) => {
    try {
        const { items } = req.body;
        // Calculate total amount in cents
        const amount = items.reduce((total, item) => total + item.price * item.quantity, 0) *
            100; // convert to cents
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "usd",
            payment_method_types: ["card"],
        });
        res.status(200).json({ clientSecret: paymentIntent.client_secret });
    }
    catch (error) {
        //console.log(error);
        res.status(500).json({ error: "Payment Intent creation failed" });
    }
};
export const createCheckoutSession = async (req, res) => {
    try {
        const { items } = req.body;
        // Map your cart items into Stripe line items
        const line_items = items.map((item) => ({
            price_data: {
                currency: "usd",
                product_data: {
                    name: item.title,
                },
                unit_amount: item.price * 100, // in cents
            },
            quantity: item.quantity,
        }));
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            line_items,
            success_url: "http://localhost:3000/stripecheckout/success",
            cancel_url: "http://localhost:3000/stripecheckout/cancel",
            metadata: {
                items: JSON.stringify(items), // save cart items for webhook
            },
        });
        res.status(200).json({ url: session.url });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "Checkout Session creation failed" });
    }
};
//# sourceMappingURL=paymentController.js.map