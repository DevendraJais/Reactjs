import React, { useState } from 'react'

function useForm1(initialValues) {
  const[values,setValues] = useState(initialValues);

  const handleChange = (e)=>{
       const{ name , value }= e.target;
       setValues({
         ...values , 
         [name]:value,
       })
  }

  const resetForm = () =>{
     setValues(initialValues);
  }


  return [values,handleChange,resetForm];
}

export default useForm1
