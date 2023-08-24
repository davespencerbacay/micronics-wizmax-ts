import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// @desc  Login User
// route  POST/api/users/login
// access Private
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.firstName + " " + user.lastName,
      email: user.email,
      token: generateToken(res, user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Username or password!");
  }
});

const logOutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logged out successfully." });
});

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
  const { email, password, firstName, lastName, isAdmin } = req.body;

  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("User already exist");
  }
  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
    isAdmin,
  });

  if (user) {
    generateToken(res, user._id);

    res.status(201).json({
      _id: user._id,
      name: user.firstName + " " + user.lastName,
      email: user.email,
      password: user.password,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error("Invalid User Data!");
  }
});

// @desc  Update User
// route  PUT/api/users/
// access Private
const updateUserById = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (user) {
      user.firstName = req.body.firstName || user.firstName;
      user.lastName = req.body.lastName || user.lastName;
      user.email = req.body.email || user.email;

      if (req.body.password) {
        user.password = req.body.password;
      }

      const updatedUser = await user.save();

      res.json({
        _id: updatedUser._id,
        name: updatedUser.firstName + " " + updatedUser.lastName,
        password: updatedUser.password,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
      });
    } else {
      res.status(404);
      throw new Error("User not found");
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

export {
  authUser,
  logOutUser,
  getUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};
