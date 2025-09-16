import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function EveryCompo() {

 const[count,setCount] = useState(0)
 
 // 1.use effect in every render.....
 
//  useEffect(()=>{
//     console.log("component render",count)
//  })

// 2. runs only once.......

// useEffect(()=>{
//     console.log("Component render one time",count)
// },[])

// 3. runs when specific state change i.e [count]....

useEffect(()=>{
    console.log("Component render one time",count)
},[count])

  return (
    <>
     <h2>count :{count}</h2>
     <button onClick={() => setCount(count+1)}>Hyy</button>
    </>
  )
}

export default EveryCompo