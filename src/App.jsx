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
const [record,setRecord]=useState(JSON.parse(localStorage.getItem('user')) || [])
const addfield=()=>{
  let newfild={
    id:Math.floor(Math.random()*100000),
    name:'',
    phone:''
  }

  
  setforminput([...forminput,newfild])  
}

const changeinput=(event,index)=>{
let data=[...forminput]
data[index][event.target.name]=event.target.value
setforminput(data)
}
const handlesubmit=()=>{
  let newrecode=[...record,...forminput]
  localStorage.setItem('user',JSON.stringify(newrecode))
  setforminput([{name:'',phone:''}])
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
          <td><input onChange={(event)=>changeinput(event,index)} type="text" name="name" value={val.name} /></td>
          <td>Phone : </td>
          <td><input onChange={(event)=>changeinput(event,index)} type="number" name="phone" value={val.phone} /></td>
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
     
        <button onClick={()=>addfield()}>Add</button>
        <br />
        <br />
        <button onClick={()=>handlesubmit()}>submit</button>
      </div>
    </>
  )
}

export default App
