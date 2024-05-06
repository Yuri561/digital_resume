import React, { useState, useEffect } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import { menuData } from '../Data/menuData';

const Menu = () => {
	const [selected, setSelected] = useState(0);

	// Retrieve the selected index from localStorage when the component mounts
	useEffect(() => {
		const storedIndex = localStorage.getItem('selectedMenuIndex');
		if (storedIndex !== null) {
			setSelected(parseInt(storedIndex));
		}
	}, []);

	// Update the selected index in localStorage when it changes
	useEffect(() => {
		localStorage.setItem('selectedMenuIndex', selected);
	}, [selected]);

	return (
		<div className='container d-flex flex-column'>
			<div className='menu-content'>
				{menuData.map((item, index) => (
					<div
						className={selected === index ? 'menuItem active' : 'menuItem'}
						key={index}
						onClick={() => setSelected(index)}>
						<Link to={item.path} className='link'>
							<li className='list-group-item'>
								<item.icon />
								<span>{item.text}</span>
							</li>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default Menu;
