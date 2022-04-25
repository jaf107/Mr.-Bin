const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  getUserDetails
} = require("../controllers/userController");

const router = express.Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/logout").get(logout);

 router.route("/me").get(isAuthenticatedUser, getUserDetails);

// router.route("/password/update").put(isAuthenticatedUser, updatePassword);

// router.route("/me/update").put(isAuthenticatedUser, updateProfile);



module.exports = router;