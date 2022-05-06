const express = require("express");
const {
  createRecycler,
  getAllRecyclers,
  getSingleRecycler,
} = require("../controllers/recyclerController.js");

const router = express.Router();

router.route("/recycler/new").post(createRecycler);
router.route("/recyclers").get(getAllRecyclers);
router.route("/recycler/:id").get(getSingleRecycler);

module.exports = router;
