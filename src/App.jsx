import { useState } from 'react'

import './App.css'

function App() {
const [forminput,setforminput]=useState([
  {
    id:'',
    name:'',
    phone:''
  }
])
const addfield=()=>{
  let newfild={
    id:Math.floor(Math.random()*100000),
    name:'',
    phone:''
  }
  setforminput([...forminput,newfild])  
}
const remove=(id)=>{
  const del =forminput.filter(val=>val.id != id)
  setforminput(del)
}
  return (
    <>
      <div align="center">
       {
        forminput.map((val,index)=>{
         return(
          <tr>
          <td>Name :- </td>
          <td><input type="text" name="name" /></td>
          <td>Phone : </td>
          <td><input type="number" name="phone" /></td>
          <td>
            {
                index == 0 ?(
                  ' '
                )
                :(
                  <button onClick={()=>remove(val?.id)}>X</button>
                )

            }
          </td>
        </tr>
         )
        })
       }
     
        <button onClick={()=>addfield()}>submit</button>
      </div>
    </>
  )
}

export default App
