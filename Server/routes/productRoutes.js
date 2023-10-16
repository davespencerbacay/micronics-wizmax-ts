import express from "express";
import { protect, admin } from "../middleware/authMiddleware.js";
import {
  getProducts,
  getProductsById,
  createProduct,
  updateProductById,
  deleteProductById,
} from "../controllers/productController.js";
import multerConfig from "../utils/multer.js";

const router = express.Router();

router
  .route("/")
  .post(protect, admin, multerConfig.single("productImage"), createProduct)
  .get(protect, admin, getProducts);
router
  .route("/:id")
  .get(protect, admin, getProductsById)
  .put(protect, admin, multerConfig.single("productImage"), updateProductById)
  .delete(protect, admin, deleteProductById);

export default router;
