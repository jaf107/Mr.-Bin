const express = require("express");
const {
  createRecycler,
  getAllRecyclers,
  getSingleRecycler,
  deleteRecycler,
} = require("../controllers/recyclerController.js");
const { isAuthenticatedUser } = require("../middleware/auth.js");

const router = express.Router();

router.route("/recycler/new").post(isAuthenticatedUser ,createRecycler);
router.route("/recyclers").get(getAllRecyclers);
router.route("/recycler/:id").get(getSingleRecycler);
router.route("/recycler/:id").delete(deleteRecycler);

module.exports = router;
