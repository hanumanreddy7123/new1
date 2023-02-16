const pr=require('../models/product')
async function getproducts(req,res)
{
    const data= await pr.find({})
    res.send({code:'200',message:'products fetched',data:data})
}
module.exports={getproducts}