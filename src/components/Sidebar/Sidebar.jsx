/* eslint-disable no-unused-vars */
import React from 'react';
import './Sidebar.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Profile from '../Profile/Profile';
import Menu from '../Menu/Menu';
import MusicPlayer  from '../MusicPlayer/MusicPlayer';


const Sidebar = () => {
  return (
    <aside
      className="container text-center position-relative"
      style={{ width: "18rem" }}
    >
      <button
        className="btn position-absolute btn-primary close-btn"
        type="button"
      ></button>
      <Profile />

      <div className="list-group mt-3 gap-3 text-light">
        <Menu />
      </div>
      <MusicPlayer />
      <div className="card-footer">
        <div className="socials">
          <ul className="list-group list-group-horizontal">
            <a
              href="https://www.instagram.com/_ufirst/"
              className="list-group-item"
              target="_blank"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/houbenove-pierre-louis/"
              className="list-group-item"
              target="_blank"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://github.com/Yuri561"
              className="list-group-item"
              target="_blank"
            >
              <i className="bi bi-github"></i>
            </a>
          </ul>
          {/* Corrected here */}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
