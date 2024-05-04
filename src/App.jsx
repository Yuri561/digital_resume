import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import RightSide from './components/Rightside/Rightside';
import Education from './components/Pages/Education/Education';
import Projects from './components/Pages/Projects/Projects';
import About from './components/Pages/About/About';
import Support from './components/Pages/Support/Support';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='app'>
        <div className='glass container-main'>
          <Sidebar />
          {/* Use Routes component to define routes */}
          <Routes>
            {/* Define routes and render components */}
            <Route path='/' element={<Main />} />
            <Route path='/education' element={<Education />} />
            <Route path='/projects' element={<Projects />} />
            {/* Add more routes as needed */}
          </Routes>
          <RightSide />
        </div>
      </div>
    </Router>
  );
}

export default App;
