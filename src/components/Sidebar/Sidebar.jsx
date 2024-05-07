/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Sidebar.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Profile from '../Profile/Profile';
import Menu from '../Menu/Menu';
import { motion } from 'framer-motion';
import MusicPlayer from '../MusicPlayer/MusicPlayer';
import { UilBars } from "@iconscout/react-unicons";
import { UilSignOutAlt } from "@iconscout/react-unicons";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpaned] = useState(true);

  const sidebarVariants = {
    true: {
      left: '0'
    },
    false: {
      left: '-60%'
    }
  };

  return (
    <>
    <aside
    className="container text-center  d-lg-flex sidebar-container"
    
    >
  
    
    <button
      className="btn button close-btn d-xl-none d-block text-light bg-dark rounded mx-5 overflow-hidden"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasResponsive"
      aria-controls="offcanvasResponsive"
    >
      <UilBars />
    </button>
      
        <div
          className="offcanvas-xl offcanvas-start text-light bg"
          tabIndex="-1"
          id="offcanvasResponsive"
          aria-labelledby="offcanvasResponsiveLabel"
        >
          <button
            type="button"
            className="btn-close close-btn d-none-xl d-none-lg d-md-none"
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
    </>
  );
}

export default Sidebar;
