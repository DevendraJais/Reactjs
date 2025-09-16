import React, { useEffect, useState} from 'react'
import axios from 'axios'

function GetUserData() {

  const[users,setUsers] = useState([])
  const[loading,setLoading] = useState(true)

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
        setUsers(response.data)
        setLoading(false)
    }).catch(()=>{
        console.log("Error in feching data",error)
        setLoading(false)
    })
  },[])

  if(loading) return <p>loading............</p>
  return (
    <>
      <h2>User List</h2>
      <ul>
        {
            users.map((user)=>(
                <li key={user.id} style={{border:"1px solid yellow",padding:"5px",margin:"5px",background:"cyan"}}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </li>
            ))
        }
      </ul>
    </>
  )
}

export default GetUserData