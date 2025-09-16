

import React from 'react'
import { useState } from "react";

function Count() {

 const[userData,setUserData] = useState(
    0
 )

 const Increment = () => {
    setUserData(userData + 1)
 }

 const Decrement = () => {
    if(userData == 0)
    {
            setUserData(0)
    }
   else{
    setUserData(userData - 1)
   }
 }


  return (
    <>
      <button onClick={Increment}> Increment</button>
      <button onClick={Decrement}> Decrement</button>
      <h1>{userData}</h1>
    </>
  )
}

export default Count