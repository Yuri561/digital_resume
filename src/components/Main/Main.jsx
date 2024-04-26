import React from 'react';
import './Main.css';
import WordOfTheDay from '../WordOfTheDay/WordOfTheDay';


const Main = () => {
  return (
    <div className='main-wrapper w-100 d-flex flex-column justify-content-center align-items-center'>
    <div className='dashboard-container w-100 d-flex flex-column'>
      <h1 className='title text-center'>Dashboard</h1>
      <div className="box-group d-flex justify-content-center">
        <div className="box"id='box1'>
        <i className="bi bi-sun-fill"></i>
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
