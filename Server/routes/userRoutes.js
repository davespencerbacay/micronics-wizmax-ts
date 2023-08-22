import express from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
} from "../controllers/userController.js";

const router = express.Router();

router.route("/").get(getUsers);
router.route("/:id").get(getUserById);
router.route("/").post(createUser);
router.route("/:id").put(updateUserById);
router.route("/:id").delete(deleteUserById);

export default router;
