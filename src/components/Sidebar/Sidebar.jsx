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
          <button type="button" className="list-group-item list-group-item-action" aria-current="true">
          <i className="bi bi-house-fill icon"></i>
            Dashboard
          </button>
           {/* Corrected here */}
          <button type="button" className="list-group-item list-group-item-action ">
          <i class="bi bi-building icon"></i>Education</button>
          <button type="button" 
           className="list-group-item list-group-item-action">
          <i class="bi bi-card-list icon"></i>Projects</button>
          <button type="button" className="list-group-item list-group-item-action ">
          <i class="bi bi-person-badge icon"></i>About</button>
          <button type="button" className="list-group-item list-group-item-action " >Hobbies</button>
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
