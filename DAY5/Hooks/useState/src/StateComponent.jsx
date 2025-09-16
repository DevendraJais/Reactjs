

import React from 'react'
import { useState } from "react";

function StateComponent() {

 const[userData,setUserData] = useState(
    {
        fullName :"arj",
        email:"arj@gmail.com"
    }
 )

 const changeState = () => {
    setUserData(preState => ({...preState,email:"dev@gmail.com"}))
 }


  return (
    <>
      <button onClick={changeState}> change email</button>
      <div>
        {userData.fullName}
        <br/>
        {userData.email}
      </div>
    </>
  )
}

export default StateComponent