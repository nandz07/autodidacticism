const mongoose=require('mongoose')

const alienSchema=new mongoose.Schema({

    name:{
        type: String,
        require:true
    },
    tech:{
        type: String,
        require:true
    },
    sub:{
        type: String,
        require:true,
        default:false
    },

})
console.log('in model');

module.exports=mongoose.model('Alien',alienSchema)