import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"

const NavBar = () => {
  return (
    <nav>
    <div className="nav-wrapper white">
      <a to="#" className="brand-logo">Insta Clone</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/signin">Login</Link></li>
        <li><Link to="/signup">SignUp</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </div>
  </nav>
  )
}

export default NavBar