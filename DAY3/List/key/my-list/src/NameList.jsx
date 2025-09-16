import React from 'react'

function NameList() {

  const names = ['arjun','mohit','harsh','aashu'];

  return (
    <>
      <ul>
        {
            names.map((name,index)=>(
                <li key={index}>{name}</li>
            ))
        }

      </ul>
    </>
  )
}

export default NameList;