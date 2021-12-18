
const express = require("express");
var router = express.Router();

var controller = require("../controllers/erro.controller");

router.get("/" , controller.get);
router.post("/" , controller.post);
router.put("/" , controller.put);

module.exports = router;