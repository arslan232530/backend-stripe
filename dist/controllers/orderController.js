import Order from "../models/order.js";
export const saveOrder = async (req, res) => {
    try {
        const { items, totalAmount, paymentStatus } = req.body;
        const order = await Order.create({
            items,
            totalAmount,
            paymentStatus,
        });
        res.status(201).json({ order });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "Failed to save order" });
    }
};
//# sourceMappingURL=orderController.js.map