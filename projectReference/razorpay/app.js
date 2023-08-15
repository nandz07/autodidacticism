require('dotenv').config()
const express=require('express')
const app=express()
const path=require('path')
const Razorpay=require('razorpay')

const PORT=process.env.PORT||4000
var instance = new Razorpay({
    key_id: 'rzp_test_tFfhFZy4sSrg7r',
    key_secret: 'AadtKoBLmxMNpmbJa5YbI05b',
  });
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render("standerd")
})
app.post('/create/orderId',(req,res)=>{
    // res.send("hello world")
    var options = {
        amount: 50000,  // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_11"
      };
      instance.orders.create(options, function(err, order) {
        console.log(order);
        res.send({orderId:order.id})
      });
})

app.listen(PORT,()=>{
    console.log(`server started at http://localhost:${PORT}`);
})
