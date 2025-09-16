import React from 'react'
import { useCallback } from 'react';
import { useState } from 'react'
import Child from './Child';


function Parent() {

    const [add,setAdd] = useState(0);
    const[count,setCount] = useState(0);

    const Demo = useCallback (()=>{
      //we will perform some operation
    },[count,add])
  return (
    <>
     <Child Demo={Demo} count = {count}/>
     <h1>UseCallBack....</h1>
     <button onClick={()=>setAdd(add+1)}>Addition</button>
     <span>{add}</span>
     <button onClick={()=>setCount(count+1)}>Count Incerement</button>
     <span>{count}</span>
    </>
  )
}

export default Parent