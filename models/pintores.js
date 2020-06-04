const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let PintoresSchema= new Schema({
    name:{
        tyoe:String,
        required:[true, 'requerimos el nombre']
    },
    corriente:{
        type:String,
        required:[true, 'requerimos la corriente']
    },
    nacionalidad:{
        type:string
    },
    pintura:{
        type:string
    },
});
module.exports= mongoose.model(name: 'PintoreSshema');
