const express=require('express')

const mongoose=require('mongoose')

const url='mongodb://localhost:27017/user'

const app=express()

mongoose.connect(url,{useNewUrlParser:true})

const con =mongoose.connection

con.on('open',function(){
    console.log('connected...!');
})

const alieanRouter=require('./routers/aliens')

app.use('/aliens',alieanRouter)


app.listen(3000,()=>{
    console.log('server sarted');
})