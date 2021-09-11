const dbConnection = require('../config/database');
let getCocina = async(req,res)=>{
    await dbConnection.query("SELECT tiempo,kitchen_12,kitchen_14,kitchen_38 from electrodomesticos;", (err,result)=>{
        if(result){
            res.send(result);
        }else{
            res.status(500).send(err);
        }
    });
}
module.exports = {
    getCocina
}