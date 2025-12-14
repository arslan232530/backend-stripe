import mongoose, { Document } from "mongoose";
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
declare const Order: mongoose.Model<IOrder, {}, {}, {}, mongoose.Document<unknown, {}, IOrder, {}, mongoose.DefaultSchemaOptions> & IOrder & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any, IOrder>;
export default Order;
//# sourceMappingURL=order.d.ts.map