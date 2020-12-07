var express = require('express');
var path = require('path');

//SERVER
var app = express();
//Plantilla de nodejs
app.set("view engine","jade"); 

//peticiones application /json
app.use(express.urlencoded({ extended: true }));    
app.use(express.json()); 
//carpeta publica para los usuarios
app.use("/public",express.static(path.join(__dirname,'/public'))); 

//Metodo GET para renderizar el formulario
app.get('/', function (req, res) {     
    res.send('hello world');
    //res.render('home');
});

//Puerto 3000 donde se inicia el server
app.listen(3000, function () {
    console.log('Cliente en puerto 3000!!!!!!');
});

module.exports = app;