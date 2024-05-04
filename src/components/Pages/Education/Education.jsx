import React from 'react';
import { motion } from 'framer-motion';
import './Education.css'; // Add your custom styles here
import ecpi from '../../../img/ecpi.png';
import vti from '../../../img/vti.png';

const Education = () => {
	return (
		<motion.div
			initial={{ scale: 0 }} // Initial state: scaled down
			animate={{ scale: 1 }} // Animation: zoom in to full size
			exit={{ scale: 0 }} // Exit animation: scale down to hide
			transition={{ type: 'spring', stiffness: 260, damping: 20 }} // Smooth spring transition
			className='container mt-2 text-center d-flex flex-column justify-content-start p-3'>
			<div className='education-content d-flex flex-column justify-content-center'>
				<h1 className='text-center'>Education</h1>
				<div className='schools p-3'>
					<div className='card' id='ecpi'>
						<div className='card__content'>
							<p className='card__title'>Card Title</p>
							<p className='card__description'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco.
							</p>
						</div>
					</div>
					<div className='card' id='ecpi'>
						<div className='card__content'>
							<p className='card__title'>Card Title</p>
							<p className='card__description'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco.
							</p>
						</div>
					</div>
					<div className='card' id='vti'>
						<div className='card__content'>
							<p className='card__title'>Card Title</p>
							<p className='card__description'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco.
							</p>
						</div>
					</div>
					<div className='card' id='vti'>
						<div className='card__content'>
							<p className='card__title'>Card Title</p>
							<p className='card__description'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco.
							</p>
						</div>
					</div>
					<div className='card' id='vti'>
						<div className='card__content'>
							<p className='card__title'>Card Title</p>
							<p className='card__description'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco.
							</p>
						</div>
					</div>
					<div className='card' id='vti'>
						<div className='card__content'>
							<p className='card__title'>Card Title</p>
							<p className='card__description'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco.
							</p>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Education;
