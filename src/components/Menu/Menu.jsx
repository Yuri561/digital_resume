import React from 'react'
import './Menu.css'
import { menuData } from '../../utils/menuData';

const Menu = () => {
  return (
    <div className='container'>
         <div className="list-group mt-3 gap-3 text-light">
       {menuData.map((item, index) => (
          <li key={index} className='list-group-item'>
            <span>{item.icons}</span>
            <span>{item.text}</span>
          </li>
       ))}
      </div>
    </div>
  )
}

export default Menu