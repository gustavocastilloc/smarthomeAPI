const dbConnection = require('../config/database');
let getRefrigeradora = async(req,res)=>{
    await dbConnection.query("SELECT * FROM fridge order by consumo asc limit 20", (err,result)=>{
        if(result){
            res.send(result);
        }else{
            res.status(500).send(err);
        }
    });
}
module.exports = {
    getRefrigeradora
}