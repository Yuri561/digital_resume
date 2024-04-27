/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React from 'react';
import './Sidebar.css';
import Logo from '../../assets/img.jpeg';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

import afroHouse from '../../img/afroHouse.png';


const Sidebar = () => {
  const theme = useTheme();
  return (
    <div className="card text-center" style={{ width: "18rem" }}>
      <div className="card-body">
        <img src={Logo} className="card-img-top img" alt="" />
        <h5 className="card-title">Yuri Pierre-Louis</h5>
        <p className="card-text">Aspiring Full-Stack Developer</p>
        <a href="#" className="btn btn-primary">
          Connect
        </a>

        <div className="list-group mt-3 gap-3 text-light">
          <li
            type="button"
            className="list-group-item list-group-item-action"
            aria-current="true"
          >
            <i className="bi bi-house-fill icon"></i>
            Dashboard
          </li>
          {/* Corrected here */}
          <li className="list-group-item list-group-item-action ">
            <i className="bi bi-building icon"></i>Education
          </li>
          <li type="button" className="list-group-item list-group-item-action">
            <i className="bi bi-card-list icon"></i>Projects
          </li>
          <li className="list-group-item list-group-item-action ">
            <i className="bi bi-person-badge icon"></i>About
          </li>
          <li className="list-group-item list-group-item-action">Hobbies</li>
        </div>
        <div className='music-container mt-5'>
        
        
        
        <Card sx={{ display: "flex" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                Live From Space
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Mac Miller
              </Typography>
            </CardContent>
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              <IconButton aria-label="previous">
                {theme.direction === "rtl" ? (
                  <SkipNextIcon />
                ) : (
                  <SkipPreviousIcon />
                )}
              </IconButton>
              <IconButton aria-label="play/pause">
                <PlayArrowIcon sx={{ height: 38, width: 38 }} />
              </IconButton>
              <IconButton aria-label="next">
                {theme.direction === "rtl" ? (
                  <SkipPreviousIcon />
                ) : (
                  <SkipNextIcon />
                )}
              </IconButton>
            </Box>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 151}}
            image={afroHouse}
            alt=""
          />
        </Card>
        </div>
      </div>
      <div className="card-footer">
        <div className="socials">
          <ul className="list-group list-group-horizontal mb-5">
            <a href="" className="list-group-item">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="" className="list-group-item">
              <i class="bi bi-linkedin"></i>
            </a>
            <a href="" className="list-group-item">
              <i class="bi bi-github"></i>
            </a>
          </ul>
          {/* Corrected here */}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
