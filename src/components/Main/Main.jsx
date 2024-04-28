/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Main.css';
import WordOfTheDay from '../WordOfTheDay/WordOfTheDay';
import { Typewriter } from 'react-simple-typewriter';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import VanillaTilt from "vanilla-tilt";

const Main = () => {
  const time = new Date();
  const format = time.toLocaleString('en-US', {
    hour: 'numeric', minute: 'numeric', month: 'short', day: 'numeric', hour12: true 
  });

  const handleDone = () => {
    console.log('done after 5 loops');
  }
  
  const handleType = () => {
    // console.log(text);
  }

  const [randomVideo, setRandomVideo] = useState('');

  const videos = [
    'OpLyF0_pG38?si=GzW0opJy0vBXAadf',
    'IQ1D7qN0aPg?si=6Tviurgo-Nws_WqF',
    'v0EZ8R3g7TU?si=T6sJpz4DGMUM-jae',
    'v0EZ8R3g7TU?si=D7PeYlHFNqo8BE-l'
    // Add more video IDs or URLs as needed
  ];

  const selectRandomVideo = () => {
    const randomIndex = Math.floor(Math.random() * videos.length);
    setRandomVideo(videos[randomIndex]);
  };

  useEffect(() => {
    selectRandomVideo();
  }, []); // Run only once when the component mounts

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll('.box'), {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5
    });
  },[])

  return (
    <div className="MainDash main-wrapper w-100 d-flex flex-column justify-content-center align-items-center">
      <div className="dashboard-container w-100 d-flex flex-column">
        <h1 className="title text-center mt-5">Dashboard</h1>
        <span className="text-center typewriter h4">
          <Typewriter
            words={[
              "Hello welcome home is a pleasure to have you",
              "hover over Vera to get started!!",
            ]}
            loop={0}
            cursor
            typeSpeed={50}
            deleteSpeed={60}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
        </span>

        <div className="box-group d-flex justify-content-center">
          <div data-tilt className="box flex-column" id="box1">
            <i className="bi bi-sun-fill"></i>
            <h5 className="h1 p-2">{format.toString()}</h5>
          </div>
          <div className="box" id="box2">
            <iframe
              width="100%"
              height="100%"
              className="youtube"
              src={`https://www.youtube.com/embed/${randomVideo}?autoplay=1&mute=1&controls=1`}
              title="News Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="box" id="box3">
            <div className="btn-hover w-100 justify-content-center mb-5">
              <div className=" icon-container border-radius-2">
                <span className="bi bi-mic" id="icon"></span>
              </div>
            </div>
          </div>
          <div className="box" id="box4">
            <div className="calendar-content">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar className="calendar" />
              </LocalizationProvider>
            </div>
          </div>
        </div>
        <WordOfTheDay />
      </div>
    </div>
  );
};

export default Main;
