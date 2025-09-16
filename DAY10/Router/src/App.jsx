import React from 'react'
import{Route,Routes} from "react-router-dom";
import Contact from './Components/Contact';
import Home from './Components/Home';
import About from './Components/About';
function App() {
  return (
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
   </Routes>
  )
}

export default App