import React, { useRef } from 'react'

function UnControlled() {
    const refobject = useRef()
    const lastName = useRef()


function handleSubmit(e){
  e.preventDefault();
  //console.log(e.target.value);
  console.log(refobject.current.value.toUpperCase());
  console.log(lastName.current.value);

  const FirstName = refobject.current.value;
  const LastName = lastName.current.value;

  if(!FirstName || !LastName)
  {
    alert("this fields are mandotory")
    return
  }

//   const data = {
//     FirstName,
//     LastName
//   }
//   console.log(data)
}

  return (
  <>
     <form action="" onSubmit={handleSubmit}>
        <label htmlFor=''>FirstName :</label>
        <input type='text' ref={refobject}/>

        <label htmlFor=''>LastName</label>
        <input type = 'text' ref={lastName}/>

        <button type='submit'>submit</button>


     </form>
  </>
  )
}

export default UnControlled