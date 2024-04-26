import React from 'react';
import './Sidebar.css';
import Logo from '../../assets/img.jpeg';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Sidebar = () => {
  return (
    <div className="card text-center" style={{ width: '18rem' }}>
      <div className="card-body">
        <img src={Logo} className='card-img-top img' alt="" />
        <h5 className="card-title">Yuri Pierre-Louis</h5>
        <p className="card-text">Aspiring Full-Stack Developer</p>
        <a href="#" className="btn btn-primary">Connect</a>

        <div className="list-group mt-3 gap-3 text-light">
          <li type="button" className="list-group-item list-group-item-action" aria-current="true">
          <i className="bi bi-house-fill icon"></i>
            Dashboard
          </li>
           {/* Corrected here */}
          <li  className="list-group-item list-group-item-action ">
          <i className="bi bi-building icon"></i>Education</li>
          <li type="button"
           className="list-group-item list-group-item-action">
          <i className="bi bi-card-list icon"></i>Projects</li>
          <li className="list-group-item list-group-item-action ">
          <i className="bi bi-person-badge icon"></i>About</li>
          <li  className="list-group-item list-group-item-action">Hobbies</li>
        </div>

      </div>
      <div className="card-footer">
        <div className="socials">
            <ul className="list-group list-group-horizontal mb-5">
                <a href='' className='list-group-item'><i className="bi bi-instagram"></i></a>
                <a href='' className='list-group-item'><i class="bi bi-linkedin"></i></a>
                <a href='' className='list-group-item'><i class="bi bi-github"></i></a>
            </ul>
         {/* Corrected here */}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
