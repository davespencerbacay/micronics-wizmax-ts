import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

// @desc  Fetch All Users
// route  GET/api/users
// access Private
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.status(200).json(users);
});

// @desc  Fetch Single User
// route  GET/api/users/:id
// access Private
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json("[User] not Found!");
  }
});

// @desc  Create Single User
// route  POST/api/users/
// access Private
const createUser = asyncHandler(async (req, res) => {
  const createdUser = await User.create(req.body);
  res.send(createdUser);
});

// @desc  Update User
// route  PUT/api/users/
// access Private
const updateUserById = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body);

    if (!user) {
      res.status(404).json("[User] not Found!");
    } else {
      const updatedUser = await User.findById(id);
      res.status(200).json(updatedUser);
    }
  } catch (error) {
    res.status(500).json({ message: `${error.message}` });
  }
});

// @desc  Delete User
// route  DELETE/api/users/
// access Private
const deleteUserById = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id, req.body);
    if (!user) {
      res.status(404).json("[User] not Found!");
    } else {
      const deletedUser = await User.findById(id);
      return res.send(deletedUser);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export { getUsers, getUserById, createUser, updateUserById, deleteUserById };
