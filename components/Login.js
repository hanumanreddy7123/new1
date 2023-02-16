import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Login()
{
    const navigate=useNavigate('')
    const [name,Setname]=useState('')
    const[password,Setpassword]=useState('')
    const handleLogin=(e)=>
    {
      e.preventDefault()
      const data={Username:name,Password:password}
      axios.post("http://localhost:5000/login",data)
      .then((res)=>
      {
        console.log(res.data)
        localStorage.setItem('token' ,res.data.token)
        localStorage.setItem('userid',res.data.userid)
        if(res.data.token)
        {
        navigate('/products')
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
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}