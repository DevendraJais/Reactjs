import React,{memo} from 'react'

function Child({Demo,count}) {

    console.log("hii i am child component")
  return (
    <>
    {Demo}
    {count}
    </>
  )
}

export default memo(Child)