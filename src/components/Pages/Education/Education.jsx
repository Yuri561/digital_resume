/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './Education.css'; // Add your custom styles here
import ihs from '../../../img/ihs.jpg';
import ecpi from '../../../img/ecpi.png';

const Education = () => {
	return (
		<motion.div
			initial={{ scale: 0 }} // Initial state: scaled down
			animate={{ scale: 1 }} // Animation: zoom in to full size
			exit={{ scale: 0 }} // Exit animation: scale down to hide
			transition={{ type: 'spring', stiffness: 260, damping: 20 }} // Smooth spring transition
			className='container mt-2 text-center'>
			<div className='education-content bg-success'>
				<h1>Education</h1>
				<p>This is the education page content.</p>
				<div className='container schools justify-content-center'>
					<div className='card '>
						
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
