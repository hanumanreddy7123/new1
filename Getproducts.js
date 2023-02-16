import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function Getproducts()
{
    const navigate=useNavigate()
    const [data,Setdata]=useState([])
    const[deldata,Setdeldata]=useState([])
    const[refresh,Setrefresh]=useState(false)
    const[prid,Setprid]=useState('')
    console.log(deldata)
    useEffect((e)=>
    {
        axios.get("http://localhost:5000/get")
        .then((res)=>
        {
            console.log(res.data.data)
            Setdata(res.data.data)
        })
        .catch((res)=>
        {
            console.log("error")
        })
    },[refresh])
    const handledelete=()=>
    {
       const data=deldata
       axios.post("http://localhost:5000/delete",data)
       .then((res)=>
       {
        console.log(res.data)
        if(res.data.code === 200)
        {

        Setrefresh(!refresh)
        }
       })
       .catch((res)=>
       {     
        console.log('error') 
       })
    }
    const handlecart=(prid)=>
    {
      const productid=prid
      const userid=localStorage.getItem('userid')
      console.log({productid,userid})
      const data={productid,userid}
      axios.post("http://localhost:5000/cart",data)
      .then((res)=>
      {
        console.log(res)
        navigate('/getcart')
      })
      .catch((res)=>
      {
        console.log('error')
      })
    }
    return(
           <div>get products
            {deldata.length>0 &&
            <button onClick={handledelete}>Delete</button>}
           <div style={{display:'flex',flexWrap:'wrap'}}>
           {data.map((item,index)=>
            {return<div style={{margin:'30px',width:'20%'}}>
            <p>{item.id}</p>
           <p>{item.name}</p>
           <p>{item.quant}</p>
           <input type='checkbox' onChange={(e)=>
        {
            console.log(e.target.checked)
            if(e.target.checked === true)
            {
            Setdeldata([...deldata,item._id])
            }
            else{
                Setdeldata(deldata.filter(e=>e !== item._id))
            }
        }}/>
           <button onClick={()=>
        {
            console.log(item._id)
            navigate(`/getproduct/${item._id}`)
        }}>Edit</button>
        <button onClick={()=>
        
          handlecart(item._id)
        }>Addtocart</button>
             </div>
            })}
            </div>
            </div>
    )
}
export default Getproducts