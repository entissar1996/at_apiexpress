const mongoose = require('mongoose');

const productSchema=new mongoose.Schema({
    designation:String,
    price:Number

});

module.exports=mongoose.model("Product",productSchema);