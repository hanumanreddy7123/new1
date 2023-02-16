import axios from "axios"
import { useState } from "react"

function Add()
{
    const[id,Setid]=useState('')
    const[name,Setname]=useState('')
    const[quant,Setquant]=useState('')
    const handlesubmit=(e)=>
    {
           e.preventDefault()
           console.log({id,name,quant})
           const data={id,name,quant}
           axios.post("http://localhost:5000/addproducts",data)
           .then((res)=>
           {
            console.log(res)
           })
           .catch((res)=>
           {
             console.log("error")
           })
    }
    return(
        <div>
            <p>products page </p>
            <form>
            Id:  <input type='text' value={id} onChange={(e)=>
            {
                Setid(e.target.value)
            }}></input><br/><br/>
            Name:<input type='text' value={name} onChange={(e)=>
            {
                Setname(e.target.value)
            }}></input><br/><br/>
             Quantity: <input type='text' value={quant} onChange={(e)=>
            {
                Setquant(e.target.value)
            }}></input><br/><br/>
             <button onClick={handlesubmit}>submit</button>
            </form>



        </div>
    )
}
export default Add