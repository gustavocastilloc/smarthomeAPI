const {Router} = require("express");
const router = Router();
const{ getElectrodosmesticos } = require("../controller/electrodomesticos.controller");

router.get('/',getElectrodosmesticos);


module.exports = router;