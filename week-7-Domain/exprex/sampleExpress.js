const express=require('express')
const { send } = require('express/lib/response')
// const { path } = require('express/lib/application')
const path=require('path')

const app=express()

app.use(function(req,res,next){
    console.log(`hello`);
    // code for session cookies default while load a web page are here

    // used to go to next 
    next()
})

app.get('/signup',function(req,res){
    // res.send('hello')
    res.sendFile(path.join(__dirname,'signup.html'))
    console.log(`middle`);
})

// app.use(function(req,res,next){
//     console.log(`end`);
//     next()
// })

app.post('/signup',(req,res)=>{
    res.send(`account created`)
})
app.get('/about',(req,res)=>{
    res.send('about')
})

app.listen(3000,()=>{
    console.log(__dirname);
    console.log(`server started`);
})