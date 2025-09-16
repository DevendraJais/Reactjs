import React from 'react'
// import useState from 'react'
import {useState} from 'react'

function Todo() {

  const[data,SetData] = useState("")
  const[task,SetTask] = useState([])

  function AddData(){
      SetTask((task)=>{
      const updatedTask = [...task,data]
      SetData("")
       return(updatedTask)
      })
    }

  function DeleteTask(){

    
  }

 function LocalStorage(){

    let LocalData = localStorage.setItem("todoData",data)
    alert("data saved sucessfuly")
    return LocalData
 }
   


  return (
    <>
      <h1>Todo App</h1>
      <br/>
      <input type='text' 
      value={data}
      onChange={(e)=>SetData(e.target.value)}></input>
      <button onClick={AddData}>Add task</button>
      <button onClick={LocalStorage}>Add task to LocalStorage</button>
      <button onClick={DeleteTask}>Delete Task</button>

      <p>Your List :</p>
   { task!=[] && task.map((data,i)=>{
    return(
        <>
          <div key={i}>
            <div>{data}</div>
          </div>
        
        </>
    )
   })}
    </>
  )
}

export default Todo