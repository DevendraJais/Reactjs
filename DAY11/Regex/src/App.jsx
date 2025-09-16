import React from 'react'
import { useState } from 'react'

function App() {

const[email,setEmail] = useState('')

const[password,setPassword] = useState('')

const[message,setMessage] = useState('')

const handleSubmit = (e)=>{
  e.preventDefault();
  //Email and password regex pattern

  const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\S+$).{8,20}$/;

  if (!emailRegex.test(email)){
    setMessage("invalid email")
    return;
  }

  if(!passwordRegex.test(password))
  {
    setMessage("invalid passwaord")
    return;
  }

  //save localstorage
  const userData = {email,password};
  localStorage.setItem('user',JSON.stringify(userData))
  setMessage("user data saved to localstorge")

  //clear form
  setEmail('');
  setPassword('')
}


  return (
    <div>
      <h2>Register Form</h2>
      <form onSubmit={handleSubmit}>
      <div>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
      </div><br/>
      <div>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </div><br/>
      <button type='submit'>submit</button>
      </form>
      <p>{message}</p>
    </div>
  )
}

export default App