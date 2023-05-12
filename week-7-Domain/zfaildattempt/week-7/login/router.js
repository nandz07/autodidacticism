var express=require("express")
var router=express.Router()



const credential={
    email:"user@gmail.com",
    password:"user123"
}

// login user



router.post('/login',(req,res)=>{
    
    if(req.session.logedIn){
        res.redirect('/route/dashboard')
    }else{

        if(req.body.email==credential.email && req.body.password == credential.password){
            req.session.user=req.body.email
            req.session.logedIn=true
            res.redirect('/route/dashboard')
            // res.end('login done')
        }else{
            res.end("invalid user name")
        }
    }
})

router.get('/abc',(req,res)=>{
    res.redirect('/route/dashboard')
})

// route for dashboard

router.get('/dashboard',(req,res)=>{
    console.log(req.session.logedIn);
    if(req.session.logedIn){
        if(req.session.user){
            res.render('dashboard',{user:req.session.user})
        }else{
            res.send('unautherised user')
            // console.log(req.session.user);
        }
    }else{
        res.redirect('/route/logout')
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