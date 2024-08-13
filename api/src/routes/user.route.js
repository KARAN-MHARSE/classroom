const express = require("express");
const router = express.Router();
const {
  register,
  login,
  createUser,
  getAllTeachers,
  updateUser,
} = require("../controllers/user.controller");

router.route("/login").post(login);
router.route("/register").post(register);
router.route("/createuser").post(createUser);
router.route("/getallteachers").get(getAllTeachers);
router.route("/updateuser").post(updateUser);

module.exports = router;
