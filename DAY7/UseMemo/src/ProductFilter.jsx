import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react'
import { useEffect } from 'react'


function ProductFilter() {
   const[data,setData] = useState([])
    const[search,setSearch] = useState("")
    const[category,setCategory] = useState("all")
// flipkart -> category  -> all , samrtphones , laptops 

// fetch  the data 
 useEffect(()=> {
      fetch("https://dummyjson.com/products")
   .then((res)=> res.json())
   .then((result)=> setData(result.products))
 },[])


   // expensive calculation
   const filteredProducts = useMemo(()=>{
      console.log("fetching products..........");
      return data.filter((p)=>{
        const matchesCategory = category === "all" || p.category === category;// p.beaty === all
      const matchesSearch =  p.title.toLowerCase().includes(search.toLowerCase())// essence === essence
      return matchesCategory && matchesSearch
      })
   },[data,category,search])

  return (
    <>

    <h1>Products</h1>
    {/* search filter */}
    <input type="text" 
    placeholder='search products.....'
    value={search}
    onChange={(e)=> setSearch(e.target.value)}/>

    {/* category filter  dropdown  */}
    <select value={category} onChange={(event)=>  setCategory(event.target.value)}>
        <option value="all">All</option>
        <option value="smartphones">SmartPhone</option>
        <option value="laptops">Laptops</option>
    </select>


    {/*  i want to display the filter products  */}
    <div>
        {filteredProducts.map((values)=> (
          <div key={values.id} style={{border:"1px solid", padding:"10px" , margin:"10px"}}>
            <h3>{values.title}</h3>
            <h3>{values.category}</h3>
            <h3>{values.price}</h3>
          </div>
        ))}
    </div>
    
    </>
  )
}

export default ProductFilter