import React from 'react'

const Profile = (props) => {
  return (
    <div>I'm {props.fullname}
    My bio is {props.bio}
    My profession is {props.profession}
    This is my photo{props.imgSrc}
    </div>
    
  )
}

export default Profile