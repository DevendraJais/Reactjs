// import React from 'react'
// import { useState,useEffect } from 'react';
// function Nestedapidata() {

//      const[product,setProducts] = useState([]);
    
//         useEffect(()=>{
//             fetch("https://dummyjson.com/products")
//             .then((response) => response.json())
//             .then((data) => setProducts(data.products.slice(0,1)));
//         },[])
//   return (
//     // <>
//     //   <h2>user feed</h2>
//     //   {product.map((product) =>(
//     //      <div key={product.id}>
//     //     <h3>{product.title}</h3>
//     //     {/* <h3>{post.userId}</h3> */}

//     //      </div>

//     //     ))
//     //   }
//     // </>
//      <>
//       <h2>User Feed</h2>
//       {products.map((product) => (
//         <div key={product.id}>
//           <h3>{product.title}</h3>
//           <img src={product.thumbnail} alt={product.title} width={150} />
//           <p>{product.description}</p>
//           <p>Price: ${product.price}</p>
//           <p>Brand: {product.brand}</p>
//           <h4>Reviews:</h4>
//           <ul>
//             {product.reviews.map((review, index) => (
//               <li key={index}>
//                 <strong>{review.reviewerName}:</strong> {review.comment} (Rating: {review.rating})
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </>
//   )
// }

// export default Nestedapidata

import React, { useState, useEffect } from 'react';

function Nestedapidata() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products.slice(0, 10))); // Get first product
  }, []);

  return (
    <>
      <h2>User Feed</h2>
      {products.map((product,index) => (
       <div style={{border: "2px solid black", display:"flex",flexWrap:"wrap"}}>
        <div key={product.id}>
          <h3>{product.title}</h3>
          <img src={product.thumbnail} alt={product.title} width={150} />
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Brand: {product.brand}</p>
          <h4>Reviews:</h4>
          <ul>
            {product.reviews.map((review, index) => (
              <li key={index}>
                <strong>{review.reviewerName}:</strong> {review.comment} (Rating: {review.rating})
              </li>
            ))}
          </ul>
        </div>
        </div>
      ))}
    </>
  );
}

export default Nestedapidata;
