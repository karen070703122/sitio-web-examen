const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;

let estatalesRouter = require('./routes/partials');

const app = express();

app.set('view engine','hbs');

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static(__dirname+'/public'));
app.use('/estatal',estatalesRouter);


mongoose.Promise = global.Promise;
const cadena = 'mongo "mongodb+srv://karen07-b0uut.mongodb.net/<dbname>" --username practica';
mongoose.connect(cadena,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>{
        console.log('Conexión con Mongo exitosa');
    })
    .catch(err=> console.log(err));


app.listen(port,()=>{
    console.log('Escuchando el puerto 3000');
});
