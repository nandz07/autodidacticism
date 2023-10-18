const express=require('express')
const mongoose= require('mongoose')
const cors =require('cors')
const multer =require('multer')
const path =require('path')
const UserModel=require('./models/Users')

const app =express()
app.use(cors())
app.use(express.json())
app.use(express.static('public'))

mongoose.connect('mongodb://127.0.0.1:27017/employee')

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/Images')
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname))
    }
})
const upload=multer({
    storage:storage
})

app.post('/upload',upload.single('file'),(req,res)=>{
    UserModel.create({image:req.file.filename})
    .then(result=>res.json(result))
    .catch(err=>console.log(err))
})

app.get('/getImage',(req,res)=>{
    UserModel.find()
    .then((users)=>{
        console.log(users);
        res.json(users)
    })
    .catch(err=>res.json(err))
})



app.listen(3000,()=>{
    console.log('server is running');
})

