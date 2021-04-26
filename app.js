const express=require('express');
const app=express();
const productRouter=require('./routers/product.routers');
const mongoose=require('mongoose');


app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

mongoose.connect('mongodb://localhost:27017/opticat_db',{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true,useFindAndModify:false })

app.use('/product',productRouter);




app.listen(3000,function(){
    console.log('Server Listening on http://localhost:3000');
});