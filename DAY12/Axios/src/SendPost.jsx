import React, { useState } from 'react'
import axios from 'axios';

function SendPost() {

    const[title,setTitle] = useState("");
    const[body,setBody] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();

        axios.post("https://jsonplaceholder.typicode.com/posts",{
            title,
            body,
            userId:1,
        }).then((response)=>{
          console.log("post created sucessfully",response.data);
          alert("post added successfully..")
          setBody("")
          setTitle("")
        }).catch((error)=>{
            console.log("error adding post",error)
        })
    }

  return (
   <>
     <h2>Add Post</h2>
     <form onSubmit={handleSubmit}>
      <input type="text" placeholder='enter your text' value={title} onChange={(e)=> setTitle(e.target.value)}/><br/>
      <textarea placeholder='enter body' value={body} onChange={(e)=> setBody(e.target.value)}/><br/>
      <button type='submit'>Add Post</button>
     </form> 
   </>
  )
}

export default SendPost