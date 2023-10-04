import express from "express";
import { protect, admin } from "../middleware/authMiddleware.js";
import {
  getProducts,
  getProductsById,
  createProduct,
  updateProductById,
  deleteProductById,
} from "../controllers/productController.js";

const router = express.Router();

router
  .route("/")
  .post(protect, admin, createProduct)
  .get(protect, admin, getProducts);
router
  .route("/:id")
  .get(protect, admin, getProductsById)
  .put(protect, admin, updateProductById)
  .delete(protect, admin, deleteProductById);

export default router;
