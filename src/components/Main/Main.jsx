import React, { useEffect, useState } from 'react';
import './Main.css';
import { Typewriter } from 'react-simple-typewriter';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import VanillaTilt from 'vanilla-tilt';
import { motion } from 'framer-motion';

const Main = () => {
  const time = new Date();
  const format = time.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    month: 'short',
    day: 'numeric',
    hour12: true,
  });

  const handleDone = () => {
    console.log('done after 5 loops');
  };

  const handleType = () => {
    // console.log(text);
  };

  const [randomVideo, setRandomVideo] = useState('');

  const videos = [
    'OpLyF0_pG38?si=GzW0opJy0vBXAadf',
    'IQ1D7qN0aPg?si=6Tviurgo-Nws_WqF',
    'v0EZ8R3g7TU?si=T6sJpz4DGMUM-jae',
    'v0EZ8R3g7TU?si=D7PeYlHFNqo8BE-l',
    // Add more video IDs or URLs as needed
  ];

  const getRandomVideo = () => {
    const randomIndex = Math.floor(Math.random() * videos.length);
    setRandomVideo(videos[randomIndex]);
  };

  useEffect(() => {
    getRandomVideo();
  }, []); // Run only once when the component mounts

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll('.box'), {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    });
  }, [randomVideo]);

  return (
    <motion.div
  className='MainDash main-wrapper d-flex position-relative flex-direction-column justify-content-center align-items-center w-100'
  initial={{ scale: 0 }} // Initial state: scaled down
  animate={{ scale: 1 }} // Animation: zoom in to full size
  exit={{ scale: 0 }} // Exit animation: scale down to hide
  transition={{ type: 'spring', stiffness: 260, damping: 20 }} // Smooth spring transition
>
      <div className='flex-column h-100 w-100'>
        <div className='dashboard-content position-relative my-2 py-md-2'>

        <h1 className='title text-center mt-5'>Dashboard</h1>
        <p className='text-center typewriter fs-6'>
          <Typewriter
            words={[
              'Hello welcome home is a pleasure to have you',
              'hover over Vera to get started!!',
            ]}
            loop={0}
            cursor
            typeSpeed={50}
            deleteSpeed={60}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
            className=' position-relative'
          />
        </p>
        <div className=' position-relative box-group mh-100 justify-content-center'>
          <div data-tilt className='box' id='box1' style={{height: '10rem', width: '10rem'}}>
            <i className='bi bi-sun-fill fs-3 '></i>
            <h5 className='p-2 fs-lg-5'>{format.toString()}</h5>

          </div>
          <div className='box' id='box2'>
            <iframe
              width='100%'
              height='100%'
              className='youtube'
              src={`https://www.youtube.com/embed/${randomVideo}?autoplay=1&mute=1&controls=1`}
              title='News Video'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            />
          </div>
          <div className='box' id='box3'>
            <div className='btn-hover w-100 justify-content-center mb-5'>
              <div className=' icon-container border-radius-2'>
                <span className='bi bi-mic' id='icon'></span>
              </div>
            </div>
          </div>
          <div className='box' id='box4'>
            <div className='calendar-content'>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar className='calendar position-relative' />
              </LocalizationProvider>
            </div>
          </div>
        </div>

        </div>

      </div>
    </motion.div>
  );
};

export default Main;
