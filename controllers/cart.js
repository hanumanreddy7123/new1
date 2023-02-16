const user=require('../models/user')
async function cart(req,res)
{
    console.log(req.body)
    const isupdate=await user.updateOne({_id:req.body.userid},{$addToSet: {cart:req.body.productid}})
    if(isupdate)
    {
        res.send({code:200,message:'add to cart success'})
    }
    else{
        res.send({code:500,message:'error'})
    }
}
module.exports={cart}