// // import React, { useReducer } from 'react'
// // import { useState } from 'react';

// // const UseReducer = () => {

// //     const API_URL = "https://jsonplaceholder.typicode.com/posts"
// //     //action - pending ,resolve , fullfill
  
// //     const handleAPIResponse = (state,action)=>{
// //      const{type,payload} = action;
// //      switch(type){
// //         case "PENDING":
// //             return {...state,loading:true}

// //         case "FULLFILL":
// //             return {...state,
// //                 loading:false,
// //                 data:action.payload,
// //                 filteredData: action.payload // initialize filteredData
// //             }

// //         case "FILTER":
// //              const filtered = state.data.filter(item =>
// //                 item.title.toLowerCase().includes(payload.toLowerCase())
// //              );
// //             return {...state,filteredData: filtered};

// //         case "REJECT":
// //             return{...state,loading:false,error:action.error}    
// //       }
// //     }  

// //     const initialState = {

// //         loading:false,
// //         data : [],
// //         filteredData:[],
// //         error :""
// //     }
    
// //     //ApiState :- current state (loading , data ,error)
// //     //dispatch :- fuction to update state by dispatching action [pending ,resolve , reject]
// //     //useReducer(handleAPIResponse,intialState) ;- Initialize sate using reducer

// //     const[APIState ,dispatch] = useReducer(handleAPIResponse,initialState);
// //     const[searchTerm,setSearchTerm] = useState("")


// //     const fetchAPI = async () =>{
// //         dispatch({type :"PENDING"})
// //         console.log("pending...")
// //         try{
// //             const APIResponse = await fetch(API_URL);
// //             const data = await APIResponse.json();

// //             dispatch ({type:"FULLFILL", payload:data})
// //             console.log("FullFilled....")
// //         }
// //         catch(error)
// //         {
// //             dispatch({type:"REJECT",error:"API uncessesfull"})
// //         }
// //     }
    
// //         const handleSearch = (e)=>{
// //           const value = e.target.value;
// //           setSearchTerm(value);
// //           dispatch({type: "FILTER",payload:value})
// //         }

// //     return (
// //     <>
// //       <label>Input Field</label>
// //         {
// //            <input value={searchTerm}
// //            placeholder='search input box'
// //            onChange={handleSearch}
// //            style={{border: "1px solid black"}}
// //            />
// //         }

// //       {APIState.loading&&(
// //         <div>
// //             <h1>loading......................</h1>
// //         </div>
// //       )}


// //       {
// //         APIState.data && APIState.data.map((user,index) =>(
// //             <li key={index} style={{border:"1px solid black",padding:"10px",margin:"10px"}}>

// //                 {user.title}
// //                 {user.body}
// //             </li>
// //         ))
// //       }

// //       {
// //          APIState.filteredData.map((user,index)=>(
// //               <li key={index} style={{border:"1px solid black",padding:"10px",margin:"10px"}}>

// //                 {user.title}
// //                 {user.body}
// //             </li>
// //         ))
// //       }

// //       {
// //         APIState.error&&(
// //             <div>
// //                 <h1>{APIState.error}</h1>
// //             </div>
// //         )
// //       }

// //       <button onClick={fetchAPI}>Fetch API</button>
// //     </>
// //   )
// // }

// // export default UseReducer

import React, { useReducer, useState } from 'react';

const UseReducer = () => {
  const API_URL = "https://jsonplaceholder.typicode.com/posts";

   const handleAPIResponse = (state, action) => {
    const { type, payload } = action;

    switch (type) {
      case "PENDING":
        return { ...state, loading: true};

      case "FULLFILL":
        return {
          ...state,
          loading: false,
          data: payload,
          filteredData: payload
        };

      case "FILTER":
        const filtered = state.data.filter(item =>
          item.title.toLowerCase().includes(payload.toLowerCase())
        );
        return { ...state, filteredData: filtered };

      case "REJECT":
        return { ...state, loading: false, error: action.error };

      default:
        return state;
    }
  };

  const initialState = {
    loading: false,
    data: [],
    filteredData: [],
    error: ""
  };

  const [APIState, dispatch] = useReducer(handleAPIResponse, initialState);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchAPI = async () => {
    dispatch({ type: "PENDING" });
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      dispatch({ type: "FULLFILL", payload: data });
    } catch (error) {
      dispatch({ type: "REJECT", error: "API fetch failed" });
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    dispatch({ type: "FILTER", payload: value });
  };

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={fetchAPI}>Fetch API</button>
      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={handleSearch}
        style={{
          padding: "8px",
          width: "300px",
          margin: "20px 0",
          border: "1px solid #000"
        }}
       // disabled={APIState.data.length === 0} // Optional: disable if no data
      />

      {APIState.loading && <h2>Loading...</h2>}
      {APIState.error && <h2 style={{ color: "red" }}>{APIState.error}</h2>}

      {APIState.filteredData.map((item) => (
        <li key={item.id} style={{
          border: "1px solid black",
          margin: "10px",
          padding: "10px",
          listStyleType: "none"
        }}>
          <strong>{item.title}</strong>
          <p>{item.body}</p>
        </li>
      ))}
    </div>
  );
};

export default UseReducer;





// import React, { useReducer, useState } from "react";

// const UseReducer = () => {
//   const API_URL = "https://jsonplaceholder.typicode.com/posts";

//   const initialState = {
//     loading: false,
//     data: [],
//     filteredData: [],
//     error: "",
//   };

//   const handleAPIResponse = (state, action) => {
//     const { type, payload } = action;

//     switch (type) {
//       case "PENDING":
//         return { ...state, loading: true };
//       case "FULLFILL":
//         return { ...state, loading: false, data: payload, filteredData: payload };
//       case "FILTER":
//         const filtered = state.data.filter((item) =>
//           item.title.toLowerCase().includes(payload.toLowerCase())
//         );
//         return { ...state, filteredData: filtered };
//       case "REJECT":
//         return { ...state, loading: false, error: action.error };
//       default:
//         return state;
//     }
//   };

//   const [APIState, dispatch] = useReducer(handleAPIResponse, initialState);
//   const [searchTerm, setSearchTerm] = useState("");

//   const fetchAPI = async () => {
//     dispatch({ type: "PENDING" });
//     try {
//       const response = await fetch(API_URL);
//       const data = await response.json();
//       dispatch({ type: "FULLFILL", payload: data });
//     } catch (error) {
//       dispatch({ type: "REJECT", error: "API fetch failed" });
//     }
//   };

//   const handleSearch = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);
//     dispatch({ type: "FILTER", payload: value });
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Post Search</h2>

//       <button onClick={fetchAPI}>Fetch API</button>

//       <br />
//       <input
//         type="text"
//         placeholder="Search by title..."
//         value={searchTerm}
//         onChange={handleSearch}
//         style={{
//           padding: "8px",
//           width: "300px",
//           margin: "20px 0",
//           border: "1px solid #000",
//         }}
//       />

//       {APIState.loading && <h2>Loading...</h2>}
//       {APIState.error && <h2 style={{ color: "red" }}>{APIState.error}</h2>}

//       {APIState.filteredData.map((item) => (
//         <li
//           key={item.id}
//           style={{
//             border: "1px solid black",
//             margin: "10px",
//             padding: "10px",
//             listStyleType: "none",
//           }}
//         >
//           <strong>{item.title}</strong>
//           <p>{item.body}</p>
//         </li>
//       ))}
//     </div>
//   );
// };

// export default UseReducer;
