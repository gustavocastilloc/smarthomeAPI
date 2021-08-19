const {Router} = require("express");
const router = Router();
const{ getRefrigeradora } = require("../controller/refrigeradora.controller");

router.get('/',getRefrigeradora);


module.exports = router;