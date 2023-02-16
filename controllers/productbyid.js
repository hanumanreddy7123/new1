const pr=require('../models/product')
const getproductbyid= async (req,res)=>
{
    let data= await pr.findById(req.params.id)
    if(data)
    {
        res.send({code:200,message:'fetched by id',data:data})
    }
    else
    {
        res.send({code:404,message:'error'})
    }
}
module.exports={getproductbyid}