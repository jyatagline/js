import React from 'react'

const Profile = () => {
  return (
    <div>
      <img src='https://i.imgur.com/MK3eW3As.jpg' />
    </div>
  )
}

const Gallery = ()=>{
    return(
        <>
        <h1>Welcome to my gallery</h1>
        <Profile/>
        <Profile/>
        
        </>
    )
}

export default Gallery;
