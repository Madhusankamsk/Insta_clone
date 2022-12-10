import React from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <div className='mycard' >
      <div className='card auth-card' >
          <h2>Insta Clone</h2>
          <input text= "text" placeholder='Email'/>
          <input text= "text" placeholder='Password'/>
          <button className='btn waves-effect waves-light' >Login</button>
          <h5><Link to="/signup" >Create an Account</Link></h5>
      </div>
    </div>
  )
}

export default Login