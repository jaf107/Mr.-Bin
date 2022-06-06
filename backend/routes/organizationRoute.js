const express = require("express");
const {
    createOrganization,
    getAllOrganization,
    getSingleOrganization, 
    deleteOrganization
} = require("../controllers/organizationController");

const router = express.Router();

router.route("/organization/new").post(createOrganization);
router.route("/organizations").get(getAllOrganization);
router.route("/organization/:id").get(getSingleOrganization);
router.route("/organization/:id").delete(deleteOrganization);

module.exports = router;