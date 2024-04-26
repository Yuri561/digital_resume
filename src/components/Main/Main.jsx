import React from 'react';
import './Main.css';
import WordOfTheDay from '../WordOfTheDay/WordOfTheDay';


const Main = () => {
  const time = new Date();
  const format = time.toLocaleString('en-US', {
    hour: 'numeric', minute: 'numeric', month: 'short', day: 'numeric', hour12: true });
  return (
    <div className='main-wrapper w-100 d-flex flex-column justify-content-center align-items-center'>
    <div className='dashboard-container w-100 d-flex flex-column'>
      <h1 className='title text-center'>Dashboard</h1>
      <div className="box-group d-flex justify-content-center">
        <div className="box flex-column"id='box1'>
        <i className="bi bi-sun-fill"></i>
        <h5 className='h1 p-2'>{format.toString()}</h5>

        
        </div>
        <div className="box"id='box2'></div>
        <div className="box"id='box3'></div>
        <div className="box" id='box4'></div>
      </div>
      <WordOfTheDay/>
      </div>
    </div>
  );
};

export default Main;
