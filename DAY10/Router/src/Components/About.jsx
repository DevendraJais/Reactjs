import React from 'react'
import { Link,useLocation} from 'react-router-dom'

function About() {
  const loc = useLocation()
  console.log(loc.state)
  return (
     <div style={{
      textAlign: 'center',
      padding: '50px',
      backgroundColor: '#f9f9f9',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      margin: '20px auto',
      maxWidth: '500px'
    }}>
      <h1 style={{ color: '#2c3e50', marginBottom: '10px' }}>About Us</h1>
      <p style={{ fontSize: '18px', color: '#555', lineHeight: '1.5' }}>
        We are passionate about building React applications that are clean, 
        minimal, and easy to understand. This About page uses inline CSS only!
      </p>

      <Link to="/">Navigate To Home Page</Link><br/><br/>
      <Link to="/contact">Navigate To Contact Page</Link>
    </div>
  )
}

export default About