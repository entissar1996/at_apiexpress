/*
const products=[
    {id:1,designation:"Lunette Police",price:300},
    {id:2,designation:"Lunette Ray Ban",price:280},
];
*/

const Product=require('../db/product-schema');

const getAllProducts = async function(){
    let products=await Product.find();
    return products;
}

//CQRS
const addProduct = async function(product){
 
   await Product.create(product);
   let products=await Product.find();
    return products;

}

module.exports={
    getAllProducts,
    addProduct
}