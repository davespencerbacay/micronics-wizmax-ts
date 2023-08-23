import express from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
  authUser,
  logOutUser,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/login", authUser);
router.post("/logout", logOutUser);
router.route("/").get(protect, admin, getUsers);
router.route("/:id").get(protect, getUserById);
router.route("/").post(protect, admin, createUser);
router.route("/:id").put(protect, updateUserById);
router.route("/:id").delete(protect, admin, deleteUserById);

export default router;
