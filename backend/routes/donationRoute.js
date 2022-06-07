const express = require("express");
const { placeDonation, getUserDonation, getDonations, updateStatus } = require("../controllers/donationController");
const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

router.route("/me/donation/new").post(isAuthenticatedUser, placeDonation);
router.route("/me/donation").get(isAuthenticatedUser, getUserDonation);
router.route("/admin/organization/donation").get(isAuthenticatedUser,getDonations);
router.route("/admin/organization/donation/:id/:status").put(isAuthenticatedUser, updateStatus);

module.exports = router;