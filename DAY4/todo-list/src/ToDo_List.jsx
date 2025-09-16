import React,{useState}from 'react'

function ToDo_List() {
    const[activity,setActivity] = useState("");
    const[listData,setListData] = useState([]);

    function addActivity(){
        setListData((listData)=>{
         const updateList = [...listData,activity];
         setActivity("")
            return(updateList)
         
        })
    }

    function removeActivity(i){
        const updatedListData = listData.filter((ele,id)=>{
            return i!=id
        })
        setListData(updatedListData)
    }

   

  return (
    <>
     <div>Todo List</div>
     <input type='text'
     placeholder='Add your Task'
     value={activity}
     onChange={(e)=> setActivity(e.target.value)}
     />

     <button onClick={addActivity}>Add</button>

     <p>Your List :</p>
     {listData !=[] && listData.map((data,i)=>{
        return(

            <>
            <div>
              <p key={i}></p>
              <div>{data}</div>

              <div>
                <button onClick={()=>removeActivity(i)}>Remove</button>
              </div>
            </div>
            </>
        )
     })}
    </>
  )
}

export default ToDo_List