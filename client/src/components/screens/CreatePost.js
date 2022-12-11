import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import M from 'materialize-css'

const CreatePost = () => {
  const history = useNavigate()
  const [title,setTitle] = useState("")
  const [body,setBody] = useState("")
  const [image,setImage] = useState("")
  const [url,setUrl] = useState("")

  const postDetails = ()=>{
    const data = new FormData()
    data.append("file",image)
    data.append("upload_preset","insta_clone")
    data.append("cloud_name","dc2vbbdu8")

    fetch("https://api.cloudinary.com/v1_1/dc2vbbdu8/image/upload",{
      method: "post",
      body: data
    })
    .then((res)=>res.json())
    .then((data)=>{
      setUrl(data.url)
        })
    .catch(err => {
      console.log(err)
    })

    fetch("/createpost",{
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " +localStorage.getItem("jwt")
      },
      body: JSON.stringify({
        title,
        body,
        photo:url
    })
    }).then(res=>res.json())
    .then(data=>{
      if(data.error){
        M.toast({html: data.error})
      }
      else{
        M.toast({html: "Created successfully"})
        history('/')
      }
    })
  }

  return (
    <div className='card input-fiedl' style={{margin:"10px auto",maxWidth:"500px",padding:"20px",textAlign:"center" }} >
        <input type="text" placeholder = "title" value={title} onChange={(e)=>setTitle(e.target.value)} />
        <input type="text" placeholder = "body"  value={body} onChange={(e)=>setBody(e.target.value)}/>
        <div className="file-field input-field">
        <div className="btn">
            <span>Image Upload</span>
            <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
        </div>
        <div className="file-path-wrapper">
            <input className="file-path validate" type="text"/>
        </div>
        </div>
        <button className='btn waves-effect waves-darken-1' onClick={()=>postDetails()} >Create Post</button>

    </div>
  )
}

export default CreatePost