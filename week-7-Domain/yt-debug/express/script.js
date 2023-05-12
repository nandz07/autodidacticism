// const express=require('express')
// const app=express()

// app.use(express.static("views"))// it act as a middleware


// // const path=require('path')
// // app.get('/',(req,res)=>{
// //     // res.json("home")
// //     res.sendFile(path.join(__dirname,"views","index.html"))
// // })
// // app.get('/contact',(req,res)=>{
// //     // res.render('<h1>Contact</h1>')
// //     res.json('contact')
// // })
// app.get('*',(req,res)=>{
//     res.status(404).send('<h1>404</h1>')
// })
// const PORT=process.env.PORT || 3000

// app.listen(PORT,()=>{
//     console.log(`running surver on ${PORT}`);
// })

// ---------- middle ware ---------

// const express=require('express')
// const app=express()

// const path=require('path')
// app.get('/profile',Tokan,validation,(req,res,next)=>{
//     console.log('user loged');
//     res.send("<h1>Success</h1>")
//     next()
// },(req,res)=>{
//     console.log(`last midddleware`);
// })
// function Tokan(req,res,next){
//     console.log("creating token");
//         const TOKEN='123'
//         req.token=true 
//         next()
// }
// function validation(req,res,next){
//     if(req.token){
//         console.log(req.token);
//         console.log('token approved');
//         next()
//         return
//     }
//     console.log(`no token`);
//     res.send('<h1>no auth<h1/>')
// }


// const PORT=process.env.PORT || 3000

// app.listen(PORT,()=>{
//     console.log(`running surver on ${PORT}`);
// })


// -------- it can also write like -----------

// const express=require('express')
// const app=express()
// const validation=require('./middileWare/validation')
// const Token=require('./middileWare/token')
// const midddleware=[Token,validation]

// const path=require('path')
// const token = require('./middileWare/token')
// // app.get('/profile',midddleware,(req,res,next)=>{
// // app.get('/profile',[midddleware],(req,res,next)=>{
// // app.get('/profile',[...midddleware],(req,res,next)=>{
// app.get('/profile',[Token,validation],(req,res,next)=>{
//     console.log('user loged');
//     res.send("<h1>Success</h1>")
//     next()
// },(req,res)=>{
//     console.log(`last midddleware`);
// })




// const PORT=process.env.PORT || 3000

// app.listen(PORT,()=>{
//     console.log(`running surver on ${PORT}`);
// })


// -----application level middleware -------

const express=require('express')
const app=express()
const validation=require('./middileWare/validation')
const Token=require('./middileWare/token')
const midddleware=[Token,validation]
app.use(dateGenerator)

const path=require('path')
const token = require('./middileWare/token')

app.get('/',(req,res,next)=>{
    console.log(`default url`);
    res.send("<h1>sucess</h1>")
})
// app.get('/profile',midddleware,(req,res,next)=>{
// app.get('/profile',[midddleware],(req,res,next)=>{
// app.get('/profile',[...midddleware],(req,res,next)=>{
app.get('/profile',[Token,validation],(req,res,next)=>{
    console.log('user loged');
    res.send("<h1>Success</h1>")
    next()
},(req,res)=>{
    console.log(`last midddleware`);
})
function dateGenerator(req,res,next){
    console.log(new Date());
    next()
}

const PORT=process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`running surver on ${PORT}`);
})