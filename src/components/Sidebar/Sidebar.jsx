/* eslint-disable no-unused-vars */
import React from 'react';
import './Sidebar.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { UilBars } from "@iconscout/react-unicons";
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
        className="btn close-btn d-lg-none text-light bg-transparent"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasResponsive"
        aria-controls="offcanvasResponsive"
      >
        <UilBars />
      </button>
      <div
        className="offcanvas-lg offcanvas-start text-light bg"
        tabIndex="-1"
        id="offcanvasResponsive"
        aria-labelledby="offcanvasResponsiveLabel"
      >
      <button
        type="button"
        className="btn-close close-btn d-none-xl"
        data-bs-dismiss="offcanvasResponsive"
        aria-label="Close"
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
      </div>
    </aside>
  );
}

export default Sidebar;
