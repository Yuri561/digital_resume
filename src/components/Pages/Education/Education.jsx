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
				<div className='container schools'>
					<Swiper
						slidesPerView={3}
						pagination={{ clickable: true }}
						navigation
						scrollbar={{ draggable: true }}
						style={{ height: '300px' }}
						// Set the height the Swiper
					>
						<SwiperSlide className=''>
							<div className='card mb-3 object-fit-contain' id='card-1'>
								<div className='col-md-8'>
									<div className='card-body'>
										<h5 className='card-title'>University of Michigan</h5>
										<p className='card-text'>
											This is a wider card with supporting text below as a
											natural lead-in to additional content. This content is a
											little bit longer.
										</p>
										<p className='card-text'>
											<small className='text-muted'>
												Last updated 3 mins ago
											</small>
										</p>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className=''>
							<div className='card mb-3 ' id='card-2'>
								<div className='row g-0'>
									<div className='col-md-4'>
										<img
											src={ihs}
											className='img-fluid rounded-start'
											alt='...'
										/>
									</div>
									<div className='col-md-8'>
										<div className='card-body'>
											<h5 className='card-title'>University of Michigan</h5>
											<p className='card-text'>
												This is a wider card with supporting text below as a
												natural lead-in to additional content. This content is a
												little bit longer.
											</p>
											<p className='card-text'>
												<small className='text-muted'>
													Last updated 3 mins ago
												</small>
											</p>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className=''>
							<div className='card mb-3 ' id='card-3'>
								<div className='row g-0'>
									<div className='col-md-8'>
										<div className='card-body'>
											<h5 className='card-title'>University of Michigan</h5>
											<p className='card-text'>
												This is a wider card with supporting text below as a
												natural lead-in to additional content. This content is a
												little bit longer.
											</p>
											<p className='card-text'>
												<small className='text-muted'>
													Last updated 3 mins ago
												</small>
											</p>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</motion.div>
	);
};

export default Education;
