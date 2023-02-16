import axios from "axios"
import { useEffect, useState } from "react"

function Cart()
{
    const[data,Setdata]=useState([])
    useEffect(()=>
    {
        const data={userid:localStorage.getItem('userid')}
        axios.post("http://localhost:5000/getcart",data)
        .then((res)=>
        {
            console.log(res)
            Setdata(res.data.cart)
        })
        .catch((res)=>
        {
            console.log('error')
        })
    },[])
    return(
        <div>
           <div style={{display:'flex',flexWrap:'wrap'}}>
          
       { data.map((item,index)=>
           {
               return<div style={{margin:'30px',width:'20%'}}>
                   <p>{item.id}</p>
                  <p>{item.name}</p>
                  <p>{item.quant}</p>
                  {/* <button>delete</button> */}
                    </div>
           })
           
        }
        </div>
       {/* <button onClick={handleLogout}>logout</button> */}
       </div>
       )
}
export default Cart