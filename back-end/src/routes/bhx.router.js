const express = require("express");
const router = express.Router();
const controller = require("../controllers/bhx.controller");

router.get("/", controller.getList);
router.get("/:id", controller.findById);
module.exports = router;
