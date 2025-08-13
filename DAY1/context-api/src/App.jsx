import React, { createContext } from 'react'
import Child from './Child';

let DataContext = createContext();
function App() {

  const name = "arjun"
  return (
    <div>
       <DataContext.Provider value={name}>
        <Child/>
       </DataContext.Provider>
    </div>
  )
}
export default App;
export {DataContext}