import React from 'react';
import './Sidebar.css';
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
import { Typewriter } from "react-simple-typewriter";

import afroHouse from '../../img/afroHouse.png';
import Profile from '../Profile/Profile';
import Menu from '../Menu/Menu';


const Sidebar = () => {
  const theme = useTheme();
  return (
    <div className="container text-center" style={{ width: "18rem" }}>
      <Profile/>

      <div className="list-group mt-3 gap-3 text-light">
       <Menu/>
      </div>
      <div className="music-container mt-5">
      <div className='text-center typewrite'>
        <Typewriter
          words={[
            "Vibe to my playlist",
            "best genre of music to code to!",
          ]}
          loop={0}
          cursor
          typeSpeed={50}
          deleteSpeed={60}
          delaySpeed={1000}
        />
      </div>
        <Card sx={{ display: "flex" }} className="music">
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
            sx={{ width: 151 }}
            image={afroHouse}
            alt=""
          />
        </Card>
      </div>
      <div className="card-footer">
        <div className="socials">
          <ul className="list-group list-group-horizontal">
            <a
              href="https://www.instagram/yuri.vankor"
              className="list-group-item"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/houbenove-pierre-louis/"
              className="list-group-item"
            >
              <i class="bi bi-linkedin"></i>
            </a>
            <a href="https://github.com/Yuri561" className="list-group-item">
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
