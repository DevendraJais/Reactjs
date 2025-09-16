import React, { useState } from 'react'
import Child from '../../forms/src/Child';

function App() {

  const[name,setName] = useState("");
  const[pswd,setpswd] = useState("");
  const[email,setEmail] = useState("");


  // function handleChange(e){

  //   console.log(e.target.value);
  //   let capName = e.target.value.toUpperCase();
  //   setName(e.target.value)
  //   setName(capName)
  // }

  // function handlePassword(e){
  //   console.log(e.target.value);
  //   setpswd(e.target.value)
  // }
  function handleChange(e){
    if(e.target.name == 'firstname'){
      const capName = (e.target.value).toUpperCase();
      setName(capName)
    }
    else if(e.target.email){
      const email = (e.target.value)
      setEmail(email)

    }
    else{
      setpswd(e.target.value)
    }
  }
  return (
    <div>
       <form action="" onSubmit={}>
        <label htmlFor="">FName</label>
        <input type="text" value={name} name='firstname'onChange={handleChange}/><br/>

        <lable htmlFor="">Email</lable>
        <input type="email" value={email} name='email' onChange={handleChange}/><br/>

        <label htmlFor=''>Password :</label>
        <input type='password' value={pswd} name='password' onChange={handleChange}/>
       </form>
       <Child name={name}/>
    </div>
  )
}

export default App