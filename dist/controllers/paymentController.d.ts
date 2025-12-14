import type { Request, Response } from "express";
interface CartItem {
    price: number;
    quantity: number;
}
interface RequestBody {
    items: CartItem[];
}
export declare const createPaymentIntent: (req: Request<any, any, RequestBody>, res: Response) => Promise<void>;
export {};
//# sourceMappingURL=paymentController.d.ts.map