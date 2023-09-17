const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  getUserDetails,
  forgotPassword,
  resetPassword,
  updatePassword,
  updateProfile,
  addFavoriteProduct,
  getFavoriteProduct,
  deleteFavorite,
  addNotification,
  getSpecificUserDetails,
  verifyUser,
  getAllUser,
  deleteUser,
} = require("../controllers/userController");
const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/logout").get(logout);

router.route("/me").get(isAuthenticatedUser, getUserDetails);

router.route("/me/verify").put(isAuthenticatedUser, verifyUser);

router.route("/password/forgot").post(forgotPassword);

router.route("/password/reset/:token").put(resetPassword);

router.route("/password/update").put(isAuthenticatedUser, updatePassword);

router.route("/me/update").put(isAuthenticatedUser, updateProfile);

router.route("/me/favorites/:id").put(isAuthenticatedUser, addFavoriteProduct);

router.route("/me/favorites/:id").delete(isAuthenticatedUser, deleteFavorite);

router.route("/me/favorites").get(isAuthenticatedUser, getFavoriteProduct);

router
  .route("/admin/user/:id")
  .get(isAuthenticatedUser, getSpecificUserDetails);

router.route("/notification/:id").post(isAuthenticatedUser, addNotification);

router.route("/admin/users").get(isAuthenticatedUser, getAllUser);

router.route("/admin/user/:id").delete(isAuthenticatedUser, deleteUser);

module.exports = router;
