const pr=require('../models/product')
async function editproducts(req,res)
{
    const id=req.body.id
    let newdata={}
    // if(req.body.id)
    // {
    //     newdata["id"]=req.body.id
    // }code
    if(req.body.name)
    {
        newdata["name"]=req.body.name
    }
    if(req.body.quant)
    {
        newdata["quant"]=req.body.quant
    }
    // if(req.body.price)
    // {
    //     newdata["price"]=req.body.price
    // }
    // if(req.body.seller)
    // {
    //     newdata["seller"]=req.body.seller
    // }
    let filter={_id:id}
    let doc=await pr.findOneAndUpdate(filter,newdata,{new:true})
    if(doc)
    {
        res.send({code:200,message:'products edited',data:doc})
    }
    else{
      res.send("error")
    }
}
module.exports={editproducts}