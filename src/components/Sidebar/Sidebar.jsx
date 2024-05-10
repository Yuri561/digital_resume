import React, { useState } from 'react';
import './Sidebar.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Profile from '../Profile/Profile';
import Menu from '../Menu/Menu';
import { motion } from 'framer-motion';
import MusicPlayer from '../MusicPlayer/MusicPlayer';
import { UilBars } from '@iconscout/react-unicons';
import { UilSignOutAlt } from '@iconscout/react-unicons';

const Sidebar = () => {
	const [selected, setSelected] = useState(0);
	const [expanded, setExpaned] = useState(true);

	const sidebarVariants = {
		true: {
			left: '0',
		},
		false: {
			left: '-60%',
		},
	};

	return (
		<aside className='container text-center d-lg-flex  sidebar-container overflow-y-auto'
    >
			<div className='d-flex d-xl-none justify-content-end w-100'>
				{/* Show only on medium and small screens */}
				<button
					className='btn button close-btn text-light bg-dark rounded mx-5'
					type='button'
					data-bs-toggle='offcanvas'
					data-bs-target='#offcanvasResponsive'
					aria-controls='offcanvasResponsive'>
					<UilBars />
				</button>
			</div>

			<div
				className='offcanvas-lg offcanvas-start text-light bg'
				tabIndex='-1'
				id='offcanvasResponsive'
				aria-labelledby='offcanvasResponsiveLabel'>
				<button
					type='button'
					className='btn-close close-btn '
					data-bs-dismiss='offcanvasResponsive'
					aria-label='Close'></button>
				<Profile />
				<Menu />
				<MusicPlayer />
				<div className='card-footer'>
					<div className='socials'>
						<ul className='list-group list-group-horizontal'>
							<a
								href='https://www.instagram.com/_ufirst/'
								className='list-group-item'
								target='_blank'>
								<i className='bi bi-instagram'></i>
							</a>
							<a
								href='https://www.linkedin.com/in/houbenove-pierre-louis/'
								className='list-group-item'
								target='_blank'>
								<i className='bi bi-linkedin'></i>
							</a>
							<a
								href='https://github.com/Yuri561'
								className='list-group-item'
								target='_blank'>
								<i className='bi bi-github'></i>
							</a>
						</ul>
						{/* Corrected here */}
					</div>
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
