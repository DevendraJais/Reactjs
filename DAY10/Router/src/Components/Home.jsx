import React from 'react'
import { Link, useNavigation} from 'react-router-dom'



function Home() {

const navigate = useNavigation();

function GoAbout()
{
 navigate("/about")
}

function GoContact()
{
navigate("/contact")
}
  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h1 style={{ color: 'blue' }}>Welcome to My Website</h1>
      <p>This is a simple Home page built with React.</p>
      <button 
        style={{ 
          padding: '10px 20px', 
          backgroundColor: 'blue', 
          color: 'white', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer' 
        }}
      >
        Get Started
      </button><br/><br/>
    
      <Link to="/about">Navigate To About Page</Link><br/><br/>
      <Link to="/contact">Navigate To Contact Page</Link><br/>
      <button onClick={GoAbout}>A</button>
      <button onClick={GoContact}></button>
    </div>
  )
}

export default Home