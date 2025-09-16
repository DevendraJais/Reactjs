import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react'

function SimpleUseMemo() {


const[add,setAdd] = useState(0);
const[sub,setSub] = useState(100);

const multiplication = useMemo(function multiply(){
    console.log("i am multiply function....")
},[add])

//useEffect -> every time render ->[]-> one time render ->[count] ->state




  return (
    <>
     <h1>useMemo here...</h1>
     {multiplication}
     <button onClick={()=>{setAdd(add+1)}}>Addition</button>
     <button onClick={()=>{setSub(sub-1)}}>Substration</button>
     <span>{sub}</span>
    </>
  )
}

export default SimpleUseMemo