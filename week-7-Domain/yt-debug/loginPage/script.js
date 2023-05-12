// const express=require('express')
// const app=express()

// app.use(express.json())
// app.use(express.urlencoded({extended:true}))

// app.use(express.static("views"))


// const emailDb='user@gmail.com'
// const passwordDb='user123'

// app.post("/login",(req,res)=>{
//     console.log(req.body);
//     const {email,password}=req.body
//     if(email==emailDb && password==passwordDb){
//         res.send('login sucess')
//     }else{
//         res.send('login faild')
//     }
// })

// const PORT=process.env.PORT || 3000
// app.listen(PORT)

// ----------- postMan --------------


const express=require('express')
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

// app.use(express.static("views"))

// const emailDb='user@gmail.com'
// const passwordDb='user123'

const userData=[
    {id:1,name:"nusair",company:"google"},
    {id:1,name:"ajsal",company:"apple"},
    {id:1,name:"akshy",company:"tesla"}
]

app.get("/user",(req,res)=>{
    res.json(userData)
})
app.post("/user",(req,res)=>{
    res.json(req.body)
})
app.get("*",(req,res)=>{
    res.json("no rout")
})

const PORT=process.env.PORT || 3000
app.listen(PORT)