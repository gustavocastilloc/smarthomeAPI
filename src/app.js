const express = require('express');

const app = express();
const cors = require('cors');

//body parser

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
app.set('port', process.env.PORT | 8080);


app.get('/',(req,res) =>{
    res.send("Bienvenido a mi API creado con GUSTAVO CASTILLO");
});

app.use("/api/refrigeradora",require('./routes/refrigeradora'));
app.use("/api/electrodomesticos",require('./routes/electrodomesticos'));
app.use("/api/cocina",require('./routes/cocina'));
app.listen(app.get('port'), () =>{
    console.log('server on port ', app.get('port'));
});