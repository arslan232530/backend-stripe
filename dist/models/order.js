import mongoose, { Schema, Document } from "mongoose";
const orderSchema = new Schema({
    items: [
        {
            productId: { type: String, required: true },
            title: { type: String, required: true },
            price: { type: Number, required: true },
            quantity: { type: Number, required: true },
        },
    ],
    totalAmount: { type: Number, required: true },
    paymentStatus: { type: String, default: "pending" },
    createdAt: { type: Date, default: Date.now },
});
const Order = mongoose.model("Order", orderSchema);
export default Order;
//# sourceMappingURL=order.js.map