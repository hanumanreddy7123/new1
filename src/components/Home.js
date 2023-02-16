import axios from 'axios'
import {useEffect, useState} from 'react'
import{useNavigate} from 'react-router-dom'
function Home()
{
    const navigate=useNavigate('')
    const[data,Setdata]=useState([]
// [
//         {
//             id:'1',
//         name:'MAZE',
//         quant:'200'
//         },
//         {
//             id:'2',
//             name:'wheat',
//         quant:'200'
//         },
//         {
//             id:'3',
//             name:'cotton',
//         quant:'2000'
//         },
//         {
//             id:'5',
//             name:'tomato',
//         quant:'1200'
//         },
//         {
//             id:'6',
//             name:'potato',
//         quant:'2100'
//         },
//         {
//             id:'7',
//             name:'leafs',
//             quant:'100'
//         }
// ]
)
    // useEffect(()=>
    // {
    //     if(!localStorage.getItem('code'))
    //     {
    //         navigate('/login')
    //     }
    // },[navigate])
    // useEffect(()=>
    // {
    //     axios.get("http://localhost:5000/products")
    //     .then((res)=>
    //     {
    //         console.log(res.data.data)
    //         Setdata(res.data.data)
    //     })
    //     .catch((res)=>
    //     {
    //         console.log("error")
    //     })
    // } ,[])
    const handleLogout=()=>
    {
        localStorage.clear()
        navigate('/login')
    }
    return(
     <div>
        <div style={{display:'flex',flexWrap:'wrap'}}>
       
    { data.map((item,index)=>
        {
            return<div style={{margin:'30px',width:'20%'}}>
                <p>{item.id}</p>
               <p>{item.name}</p>
               <p>{item.quant}</p>
               <button>delete</button>
                 </div>
        })
        
     }
     </div>
    <button onClick={handleLogout}>logout</button>
    </div>
    )
}
export default Home