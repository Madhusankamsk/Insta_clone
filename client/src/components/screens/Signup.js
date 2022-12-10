import React from 'react'
import { Link } from 'react-router-dom'


const Signup = () => {
  return (
    <div className='mycard' >
      <div className='card auth-card' >
          <h2>Insta Clone</h2>
          <input text= "text" placeholder='Name'/>
          <input text= "text" placeholder='Email'/>
          <input text= "text" placeholder='Password'/>
          <button className='btn waves-effect waves-light' >SignUp</button>
          <h5><Link to="/signin" >Already have an Account</Link></h5>
      </div>
    </div>  )
}

export default Signup