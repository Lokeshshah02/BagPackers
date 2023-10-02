import React from 'react'
import "./navbar.scss"
import logo from "../../assests/logo.png"

const Navbar = () => {
  return (
    <>
    <div className="navbar-container">
      <div className="navbar-left">
        <img src={logo} alt=''></img>
        </div>
        <div className="navbar-right">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Maps</a>
        
      </div>
    </div>
    
    </>
  )
}

export default Navbar