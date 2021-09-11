const dbConnection = require('../config/database');

let getElectrodosmesticos = async(req,res)=>{
    await dbConnection.query("SELECT * FROM TOP_10ELECTRO;", (err,result)=>{
        if(result){
            res.send(result);
        }else{
            res.status(500).send(err);
        }
    });
}
module.exports = {
    getElectrodosmesticos
}