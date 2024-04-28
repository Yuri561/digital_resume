import React, {useState} from 'react'
import './Menu.css'
import { menuData } from '../Data/menuData';

const Menu = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="container">
      {menuData.map((item, index) => (
        <div
          className={selected === index ? "menuItem active" : "menuItem"}
          key={index}
          onClick={() => setSelected(index)}
        >
          <li className="list-group-item">
            <item.icon/>
            <span>{item.text}</span>
          </li>
        </div>
      ))}
    </div>
  );
};

export default Menu;