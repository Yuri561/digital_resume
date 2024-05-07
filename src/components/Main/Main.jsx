import React, { useEffect, useState } from 'react';
import './Main.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import VanillaTilt from 'vanilla-tilt';
import { motion } from 'framer-motion';

const Main = () => {
	const time = new Date();
	const format = time.toLocaleString('en-US', {
		hour: 'numeric',
		minute: 'numeric',
		month: 'short',
		day: 'numeric',
		hour12: true,
	});

	const handleDone = () => {
		console.log('done after 5 loops');
	};

	const handleType = () => {
		// console.log(text);
	};

	const [randomVideo, setRandomVideo] = useState('');

	const videos = [
		'OpLyF0_pG38?si=GzW0opJy0vBXAadf',
		'IQ1D7qN0aPg?si=6Tviurgo-Nws_WqF',
		'v0EZ8R3g7TU?si=T6sJpz4DGMUM-jae',
		'v0EZ8R3g7TU?si=D7PeYlHFNqo8BE-l',
		// Add more video IDs or URLs as needed
	];

	const getRandomVideo = () => {
		const randomIndex = Math.floor(Math.random() * videos.length);
		setRandomVideo(videos[randomIndex]);
	};

	useEffect(() => {
		getRandomVideo();
	}, []); // Run only once when the component mounts

	useEffect(() => {
		VanillaTilt.init(document.querySelectorAll('.box'), {
			max: 25,
			speed: 400,
			glare: true,
			'max-glare': 0.5,
		});
	}, [randomVideo]);

	return (
		<motion.div
			className='mt-2 text-center d-flex flex-md-column justify-content-center align-items-center bg-dark rounded wrapper-main'
			initial={{ scale: 0 }} // Initial state: scaled down
			animate={{ scale: 1 }} // Animation: zoom in to full size
			exit={{ scale: 0 }} // Exit animation: scale down to hide
			transition={{ type: 'spring', stiffness: 260, damping: 20 }} // Smooth spring transition
		>
			<div className='dashboard-content d-flex flex-md-column justify-content-start rounded h-100 w-100'>
				<Container className='box-group mh-100 justify-content-center align-items-center'>
					<h1 className='title text-center'>Dashboard</h1>
					<Row
						xs={1}
						md={3}
						lg={2}
						className=' row-cols-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-5 g-2 g-lg-5 g-5'>
						<Col key={1}
						className='col col-5'>
							<Card className='box' id='box1'>
								<i className='bi bi-sun-fill fs-3'></i>
								<h5 className='p-2 fs-lg-5'>{format.toString()}</h5>
							</Card>
						</Col>
						<Col>
							<Card className='box' id='box2'>
								
								<iframe
									width='100%'
									height='100%'
									className='youtube'
									src={`https://www.youtube.com/embed/${randomVideo}?autoplay=1&mute=1&controls=1`}
									title='News Video'
									frameBorder='0'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
									allowFullScreen
								/>
							</Card>
						</Col>
						<Col>
							<Card className='box' id='box3'>
								<div className='btn-hover w-100 justify-content-center mb-5'>
									<div className='icon-container border-radius-2'>
										<span className='bi bi-mic' id='icon'></span>
									</div>
								</div>
							</Card>
						</Col>
						<Col>
							<Card className='box' id='box4'>
								<div className='calendar-content'>
									<LocalizationProvider dateAdapter={AdapterDayjs}>
										<DateCalendar className='calendar position-relative' />
									</LocalizationProvider>
								</div>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		</motion.div>
	);
};

export default Main;
<motion.div
			initial={{ scale: 0 }} // Initial state: scaled down
			animate={{ scale: 1 }} // Animation: zoom in to full size
			exit={{ scale: 0 }} // Exit animation: scale down to hide
			transition={{ type: 'spring', stiffness: 260, damping: 20 }} // Smooth spring transition
			className='text-center d-flex flex-md-column justify-content-center p-3'>
			<div className='education-content d-flex flex-md-column justify-content-start rounded  h-100'>
				<Container className='box-group mh-100 justify-content-center align-items-center p-3'>
					<h1 className='text-center my-3'>Education</h1>
					<Row
						xs={1}
						md={3}
						lg={3}
						className=' row-cols-2 row-cols-lg-3 row-cols-md-3 g-2 g-lg-3 g-4'>
						{/* Use a unique key for each card */}
						<Col key={1}>
							<Card id='vti'>
								<div className='card__content  overflow-y-auto w-100'>
									<Card.Header className='card__title'>Favorites</Card.Header>

									<Card.Body className='card__description'>
											
								<iframe
									width='100%'
									height='100%'
									className='youtube'
									src={`https://www.youtube.com/embed/${randomVideo}?autoplay=1&mute=1&controls=1`}
									title='News Video'
									frameBorder='0'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
									allowFullScreen
								/>
									</Card.Body>
								</div>
							</Card>
						</Col>
						<Col key={2}>
							<Card className='card' id='janbask'>
								<div className='card__content overflow-y-auto w-100'>
									<Card.Header className='card__title'>
										Calendar
									</Card.Header>
									<Card.Body className='card__description'>
									<LocalizationProvider dateAdapter={AdapterDayjs}>
										<DateCalendar className='calendar position-relative' />
									</LocalizationProvider>
									</Card.Body>
								</div>
							</Card>
						</Col>
						<Col key={3}>
							<Card className='card' id=''>
								<div className='card__content overflow-y-auto w-100'>
									<Card.Header className='card__title'>Pentesting</Card.Header>
									<Card.Body className='card__description'>
										<Card.Text>
											
										</Card.Text>
									</Card.Body>
								</div>
							</Card>
						</Col>
						<Col key={4}>
							<Card className='card ' id=''>
								<div className='card__content overflow-y-auto w-100'>
									<Card.Header className='card__title'>
										Cybersecurity Analyst
									</Card.Header>
									<Card.Body className='card__description'>
										<Card.Text>
											<p>
												
											</p>
										</Card.Text>
									</Card.Body>
								</div>
							</Card>
						</Col>
						<Col key={5}>
							<Card className='card' id='ecpi'>
								<div className='card__content overflow-y-auto w-100'>
									<Card.Title className='card__title'>
										A.A.S M.E.T
									</Card.Title>
									<Card.Body className='card__description'>
										<p>
											
										</p>
									</Card.Body>
								</div>
							</Card>
						</Col>
						<Col key={6}>
							<Card className='card' id='vti'>
								<div className='card__content overflow-y-auto w-100'>
									<p className='card__title'>Card Title</p>
									<p className='card__description'>
										
									</p>
								</div>
							</Card>
						</Col>
						{/* Repeat for other cards */}
					</Row>
				</Container>
			</div>
		</motion.div>