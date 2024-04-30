// Menu.jsx

import React, { useState } from 'react';
import './Menu.css';
import { Link} from 'react-router-dom';
import { menuData } from '../Data/menuData';

const Menu = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className='container'>
      {menuData.map((item, index) => (
        <div
          className={selected === index ? 'menuItem active' : 'menuItem'}
          key={index}
          onClick={() => setSelected(index)}>
          {/* Wrap each menu item with a Link component */}
          <Link to={item.path} className='link '>
            <li className='list-group-item'>
              <item.icon />
              <span>{item.text}</span>
            </li>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Menu;
