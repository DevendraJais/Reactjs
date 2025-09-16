import React from 'react'
import { Link } from 'react-router-dom'
function Contact() {
  return (
    <>
    <div> i am Contact component</div>
    <Link to="/">Navigate To Home Page</Link><br/><br/>
    <Link to="/about">Navigate To About Page</Link>
    </>
    
  )
}

export default Contact