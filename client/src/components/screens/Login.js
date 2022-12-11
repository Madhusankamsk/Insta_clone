import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import M from 'materialize-css'


const Login = () => {
  const history = useNavigate()
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const PostData = ()=>{
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
      M.toast({html: "invalid email",classes:"#c62828 red darken-3"})
      return
  }
      fetch("/signin",{
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
      })
      }).then(res=>res.json())
      .then(data=>{
        console.log(data)
        if(data.error){
          M.toast({html: data.error})
        }
        else{
          localStorage.setItem("jwt",data.token)
          localStorage.setItem("user",JSON.stringify(data.user))
          M.toast({html: "Login success"})
          history('/')
        }
    })
  }
  return (
    <div className='mycard' >
      <div className='card auth-card' >
          <h2>Insta Clone</h2>
          <input text= "text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email'/>
          <input text= "text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password'/>
          <button className='btn waves-effect waves-light' onClick={()=>PostData()} >Login</button>
          <h5><Link to="/signup" >Create an Account</Link></h5>
      </div>
    </div>
  )
}

export default Login