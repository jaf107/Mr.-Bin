const express = require("express");
const { createOrganization, getAllOrganization, getSingleOrganization } = require("../controllers/organizationController");

const router = express.Router();

router.route("/organization/new").post(createOrganization);
router.route("/organizations").get(getAllOrganization);
router.route("/organization/:id").post(getSingleOrganization);

module.exports = router;