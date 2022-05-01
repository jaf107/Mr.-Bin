const express = require("express");
const {
  createRecycler,
  getAllRecyclers,
} = require("../controllers/recyclerController.js");

const router = express.Router();

router.route("/recycler/new").post(createRecycler);
router.route("/recyclers").get(getAllRecyclers);

module.exports = router;
