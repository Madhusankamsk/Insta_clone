import React from 'react'

const Profile = () => {
  return (
    <div style={{maxWidth:"550px",margin:"0px auto"}} >
      <div style={{display:"flex",justifyContent:"space-around",margin:"18px 0px",borderBottom:"1px solid gray"}} >
          <div>
              <img style={{width:"160px",height:"160px",borderRadius:"80px"}} src="https://images.unsplash.com/photo-1670683840109-706bb175f8d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" />
          </div>
          <div>
            <h4>Amali Wasana</h4>
              <div style={{display:"flex",justifyContent:"space-between",width:"108%"}} >
                <h5>40 posts</h5>
                <h5>40 followings</h5>
                <h5>40 followers</h5>
              </div>
          </div>
          
      </div>
      <div className='gallery' >
          <img className='item' src = "https://images.unsplash.com/photo-1670683840109-706bb175f8d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" />
          <img className='item' src = "https://images.unsplash.com/photo-1670683840109-706bb175f8d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" />
          <img className='item' src = "https://images.unsplash.com/photo-1670683840109-706bb175f8d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" />
          <img className='item' src = "https://images.unsplash.com/photo-1670683840109-706bb175f8d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" />
          <img className='item' src = "https://images.unsplash.com/photo-1670683840109-706bb175f8d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" />
          <img className='item' src = "https://images.unsplash.com/photo-1670683840109-706bb175f8d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" />
      </div>
    </div>
  )
}

export default Profile