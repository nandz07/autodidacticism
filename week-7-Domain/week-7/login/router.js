var express=require("express")
var router=express.Router()

const credential={
    email:"user@gmail.com",
    password:"user123"
}

// login user

router.post('/login',(req,res)=>{
    if(req.body.email==credential.email && req.body.password == credential.password){
        req.session.user=req.body.email
        res.redirect('/route/dashboard')
        // res.end('login done')
    }else{
        res.end("invalid user name")
    }
})

// route for dashboard

router.get('/dashboard',(req,res)=>{
    if(req.session.user){
        res.render('dashboard',{user:req.session.user})
    }else{
        res.send('unautherised user')
    }
})

// route for logout

router.get('/logout',(req,res)=>{
    req.session.destroy(function(err){
        if(err){
            console.log(err);
            res.send('Error')
        }else{
            res.render('base',{title:"fexpress",logout:"logout successfully..!"})
        }
    })
})

module.exports=router