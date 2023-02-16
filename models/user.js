const mongoose=require('mongoose')
const user=mongoose.Schema(
    {
        Username:String,
        Password:String,
        confirm:String,
        type:String,
        contact:String,
        cart:[{ type:mongoose.Schema.Types.ObjectId, ref:'pr'}]


    }  
)
module.exports=mongoose.model('user',user)