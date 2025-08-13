// import React, { useContext } from 'react'
// import { DataContext } from './App';
// function Child() {
//     let name1 = useContext(DataContext);
//   return (
//     <h1>
//         My name is {name1}
//     </h1>
//   )
// }

// export default Child


import React from 'react'
import { DataContext } from './App'

function Child() {
  return (
    <>
     <DataContext.Consumer>
       { 
        (name) =>{
          return(
            <>
              <h1>my name is: {name}</h1>
            </>
          )
        }
       }
     </DataContext.Consumer>
    </>
  )
}

export default Child