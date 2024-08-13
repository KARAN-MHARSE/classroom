const User = require("../models/user.model");
const { ApiError } = require("../utils/ApiError");
const { AsyncHandler } = require("../utils/asyncHandler");

const register = AsyncHandler(async (req, res) => {
  const { name, role, email, password } = req.body;

  if ([email, password].some((fields) => fields?.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }

  const existedUser = await User.findOne({ email });
  if (existedUser) {
    throw new ApiError(400, "User already registered");
  }
  const user = await User.create({
    name,
    role,
    email,
    password,
  });

  const succesFullyRegistedUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );
  if (!succesFullyRegistedUser) {
    throw new ApiError(501, "something went wrong");
  }

  res.json({
    success: true,
    user: succesFullyRegistedUser,
  });
});

const login = AsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, "All fields are required");
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new ApiError(500, "User not found");
  }
  const isPassworRight = await user.isPasswordCorrect(password);
  if (!isPassworRight) {
    throw new ApiError(500, "Wrong password");
  }

  const refreshToken = await user.generateRefreshToken();

  return res.status(201).cookie("token", refreshToken).json({
    success: true,
    user,
  });
});

const createUser = AsyncHandler(async (req, res) => {
  const { name, role, className, email, password } = req.body;

  if (
    [name, email, className, password, role].some(
      (field) => field.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields are required");
  }
  const existedUser = await User.findOne({ email });
  if (existedUser) {
    throw new ApiError(400, "User already registered");
  }

  const user = await User.create({
    name,
    email,
    role,
    className,
    password,
  });

  // return res.status(201).json({
  //   success: true,
  //   user,
  // });
  res.json({ success: true });
});

const updateUser = AsyncHandler(async (req, res) => {
  const { id, name, role, className, email, password } = req.body;

  const user = await User.findById(id);
  if (!user) {
    throw new ApiError(404, "User not found");
  }

  // Update the user's details
  user.name = name || user.name;
  user.email = email || user.email;
  user.role = user.role;
  user.className = className || user.className;

  if (password.trim()) {
    user.password = password;
  }

  await user.save();
  res.json({
    success: true,
    user,
  });
});

const getAllTeachers = AsyncHandler(async (req, res) => {
  const user = await User.find();
  res.status(200).json({
    success: true,
    user,
  });
});

module.exports = { register, login, updateUser, createUser, getAllTeachers };
