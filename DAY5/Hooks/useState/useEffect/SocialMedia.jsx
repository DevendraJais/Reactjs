import React, { useEffect, useState } from 'react'



function SocialMedia() {

    const[posts,setPosts] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => setPosts(data.slice(0,10)));
    },[])
  return (
    <>
      <h2>user feed</h2>
      {posts.map((post) =>(
         <div key={post.id}>
        <h3>{post.title}</h3>
        <h3>{post.userId}</h3>

         </div>

        ))
      }
    </>
  )
}

export default SocialMedia