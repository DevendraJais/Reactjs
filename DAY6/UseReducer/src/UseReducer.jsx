import React, { useReducer } from 'react'

const UseReducer = () => {



    const API_URL = "https://jsonplaceholder.typicode.com/posts"
    //action - pending ,resolve , fullfill
  
    const handleAPIResponse = (state,action)=>{
     const{type} = action;
     switch(type){
       case "PENDING":
            return {...state,loading:true}
        case "FULLFILL":
            return {...state,loading:false,data:action.payload}
        case "REJECT":
            return{...state,loading:false,error:action.error
            }    
      }
    }  

    const initialState = {

        loading:false,
        data : false,
        error :""
    }
    
    //ApiState :- current state (loading , data ,error)
    //dispatch :- fuction to update state by dispatching action [pending ,resolve , reject]
    //useReducer(handleAPIResponse,intialState) ;- Initialize sate using reducer

    const[APIState ,dispatch] = useReducer(handleAPIResponse,initialState)


    const fetchAPI = async () =>{
        dispatch({type :"PENDING"})
        console.log("pending...")
        try{
            const APIResponse = await fetch(API_URL);
            const data = await APIResponse.json();

            dispatch ({type:"FULLFILL", payload:data})
            console.log("FullFilled....")
        }
        catch(error)
        {
            dispatch({type:"REJECT",error:"API uncessesfull"})
        }
    }

    return (
    <>
      {APIState.loading&&(
        <div>
            <h1>loading</h1>
        </div>
      )}


      {
        APIState.data && APIState.data.map((user,index) =>(
            <li key={index} style={{border:"1px solid black",padding:"10px",margin:"10px"}}>

                {user.title}
                {user.body}
            </li>
        ))
      }

      {
        APIState.error&&(
            <div>
                <h1>{APIState.error}</h1>
            </div>
        )
      }

      <button onClick={fetchAPI}>Fetch API</button>
    </>
  )
}

export default UseReducer