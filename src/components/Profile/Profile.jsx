import React from 'react'
import Logo from '../../assets/img.jpeg';
import './Profile.css'



const Profile = () => {
  return (
    <div className="p-2 text-center container-content">
    <img src={Logo} className="card-img-top img" alt="" />
    <h5 className="card-title">Yuri Pierre-Louis</h5>
    <p className="card-text">Full-Stack Developer</p>
    <a href="#" className="btn connect">
      Connect
    </a>
  </div>
  )
}

export default Profile