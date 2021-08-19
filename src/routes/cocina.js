const {Router} = require("express");
const router = Router();
const{ getCocina } = require("../controller/cocina.controller");

router.get('/',getCocina);


module.exports = router;