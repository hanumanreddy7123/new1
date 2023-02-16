import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Signup()
{
    const navigate=useNavigate('')
    const [name,Setname]=useState('')
    const[password,Setpassword]=useState('')
    const [confirm,Setconfirm]=useState('')
    const [type,Settype]=useState('')
    const[contact,Setcontact]=useState('')
    const handleLogin=(e)=>
    {
      e.preventDefault()
      const data={Username:name,Password:password,confirm:confirm,type:type,contact:contact}
      axios.post("http://localhost:5000/signup",data)
      .then((res)=>
      {
        console.log(res.data)
        if(res.data.code === 200)
        {
        navigate('/login')
        }
      })
      .catch((res)=>
      {
        console.log("error")
      })
    }
    return(
        <div>
         UserName:  <input type='text' value={name} onChange={(e)=>
          {
               Setname(e.target.value)
          }}></input><br/><br/>
        Password:  <input type='password' value={password} onChange={(e)=>
          {
            Setpassword(e.target.value)
          }}></input><br/><br/>
           confirm:  <input type='password' value={confirm} onChange={(e)=>
          {
            Setconfirm (e.target.value)
          }}></input><br/><br/>
           type:  <input type='password' value={type} onChange={(e)=>
          {
            Settype (e.target.value)
          }}></input><br/><br/>
           contact:  <input type='password' value={contact} onChange={(e)=>
          {
            Setcontact (e.target.value)
          }}></input><br/><br/>
            <button onClick={handleLogin}>SIGNUP</button>
        </div>
    )
}