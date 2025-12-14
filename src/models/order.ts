import mongoose, { Schema, Document } from "mongoose";

export interface IOrder extends Document {
  items: {
    productId: string;
    title: string;
    price: number;
    quantity: number;
  }[];
  totalAmount: number;
  paymentStatus: string;
  createdAt: Date;
}

const orderSchema: Schema = new Schema({
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

const Order = mongoose.model<IOrder>("Order", orderSchema);

export default Order;
