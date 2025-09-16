import React from 'react'
import useForm1 from './useForm1'

function App() {
  const[formValues,handleChange,resetForm]=useForm1({
    name:"",
    email:"",
  })


  const handleSubmit = (e)=>{
    e.preventDefault();
    alert(`Name :${formValues.name} , Email :${formValues.email}`)
    resetForm();
  }

  return (
    <>
    <div>
      <h1>Registration form</h1>
      <form onSubmit={handleSubmit}>
       <input type="text" placeholder='Enter your name ' name="name" value={formValues.name} onChange={handleChange}/> <br />
      <input type="email" placeholder='Enter your email ' name="email" value={formValues.email} onChange={handleChange}/>
       <br />
       <button type='submit'>Submit</button>
       <button type='button' onClick={resetForm}>Reset</button>
      </form>
    </div>
    </>
  )
}

export default App