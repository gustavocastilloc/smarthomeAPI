const dbConnection = require('../config/database');
let getCocina = async(req,res)=>{
    await dbConnection.query("select * from fridge", (err,result)=>{
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