import { Router } from "express";
import { getAllProducts, getFilters } from "../controllers/productController.js";
const router = Router();

router.get("/", getAllProducts);
router.get("/filters", getFilters);

export default router;