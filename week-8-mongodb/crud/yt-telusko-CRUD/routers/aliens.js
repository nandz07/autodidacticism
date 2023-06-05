const express=require('express')

const router = express.Router()
const Alien=require('../models/alien')

// router.get('/',(req,res)=>{
//     console.log('get req');
//     res.end()
// })


router.get('/',async(req,res)=>{
    // try{
    //     const aliens=await Alien.find()
    //     // res.json(aliens)
    //     res.send('<a href="/aliens">Logout</a>')
    // }catch(err){
    //     res.send(err)
    // }
    console.log('post');
    const alien=new Alien({
        name:'nandu',
        tech:'IT',
        sub:true
    })
    try{
        const a1=await alien.save()
        res.json(a1)
    }catch(err){
        res.send(err)
    }
})
router.post('/',async(req,res)=>{
    console.log('post');
    const alien=new Alien({
        name:'nandu',
        tech:'IT',
        sub:true
    })
    try{
        const a1=await Alien.save()
        res.json(a1)
    }catch(err){
        res.send(err)
    }
})

module.exports=router