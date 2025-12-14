import express from "express";
import { saveOrder } from "../controllers/orderController.js";
const router = express.Router();
router.post("/", saveOrder);
export default router;
//# sourceMappingURL=orderRouter.js.map