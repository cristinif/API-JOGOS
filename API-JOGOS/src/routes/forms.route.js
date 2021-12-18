
const express = require("express");
var router = express.Router();

var controller = require("../controllers/forms.controller");

router.get("/formulario" , controller.get); 
router.post("/formulario" , controller.post);
router.put("/formulario" , controller.put);
router.delete("/formulario" , controller.delete);


module.exports = router;