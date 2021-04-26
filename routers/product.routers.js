const express=require('express');
const router = express.Router();
const productService=require('../services/product.service');




router.get('/',async function(req,res,next){
    res.json(await productService.getAllProducts());
 });
 
 router.post('/',async function(req,res,next){
    const {...product}=req.body;
    const ps=await productService.addProduct(product);
  
    res.json({
        message:"Product successfully added",
        products:ps,
        total:ps.length
     });
 
 });

 module.exports=router;