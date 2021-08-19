const mysql = require('mysql');
const mysqlConnection=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Tetian96',
    database: 'smarthome'
});

mysqlConnection.connect(function(err) {
    if(err){
        console.log(err);
        return;
    }else{
        console.log('DB conectada');
    }
});

module.exports = mysqlConnection;