const mongoose=require('mongoose')
const products=mongoose.Schema({
    id:String,
    name:String,
    quant:String
})
module.exports=mongoose.model('pr',products)