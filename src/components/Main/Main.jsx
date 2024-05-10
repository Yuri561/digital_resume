import React, { useEffect, useState } from 'react';
import './Main.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import VanillaTilt from 'vanilla-tilt';
import { motion } from 'framer-motion';

const Main = () => {
	// const time = new Date();
	// const format = time.toLocaleString('en-US', {
	// 	hour: 'numeric',
	// 	minute: 'numeric',
	// 	month: 'short',
	// 	day: 'numeric',
	// 	hour12: true,
	// });

	// const handleDone = () => {
	// 	console.log('done after 5 loops');
	// };

	// const handleType = () => {
	// 	// console.log(text);
	// };

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
			initial={{ scale: 0 }}
			animate={{ scale: 1 }}
			exit={{ scale: 0 }}
			transition={{ type: 'spring', stiffness: 260, damping: 20 }}
			className='text-center d-flex flex-md-column justify-content-md-center p-3 wrapper '>
			<div className='education-content d-flex flex-column justify-content-start justify-content-sm-center justify-content-xl-start w-100 align-items-center rounded h-100'>
				<Container className='box-group mh-100 justify-content-center align-items-center p-3'>
					<h1 className='text-center my-3'>Dashboard</h1>
					<Row
						xs={1}
						md={3}
						lg={3}
						className='row-cols-2 row-cols-lg-3 row-cols-md-3 g-2 g-lg-3'>
						<Col key={1}>
							<Card className='card border-rounded border' id='youtube'>
								
								<div className='card__content  card-body overflow-y-auto w-100'>
										<iframe
											width='100%'
											height='100%'
											className='youtube'
											src={`https://www.youtube.com/embed/${randomVideo}?autoplay=1&controls=1`}
											title='News Video'
											frameBorder='0'
											allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
											allowFullScreen
										/>
									
								</div>
							</Card>
							<h2 className='text-center text-white'>Youtube</h2>
						</Col>
						<Col key={2}>
							<Card className='card' id='vera1'>
								<div className='card__content overflow-y-auto w-100'>
									<button className='btn btn-primary my-5'>Activate Vera</button>
								</div>
							</Card>
							<h2 className='text-center text-white'>Vera</h2>
						</Col>
						<Col key={3}>
							<Card className=''></Card>
							<h2 className='text-center text-white'>ToDo App</h2>
						</Col>
						<Col key={4}>
							<Card className='card border-rounded border' id='youtube'>
								
								<div className='card__content  card-body overflow-y-auto w-100'>
										<iframe
											width='100%'
											height='100%'
											className='youtube'
											src={`https://www.youtube.com/embed/${randomVideo}?autoplay=1&controls=1`}
											title='News Video'
											frameBorder='0'
											allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
											allowFullScreen
										/>
									
								</div>
							</Card>
							<h2 className='text-center text-white'>Youtube</h2>
						</Col>
						<Col key={5}>
							<Card className='card' id='vera1'>
								<div className='card__content overflow-y-auto w-100'>
									<button className='btn btn-primary my-5'>Activate Vera</button>
								</div>
							</Card>
							<h2 className='text-center text-white'>Vera</h2>
						</Col>
						<Col key={5}>
							<Card className='card' id='vera1'>
								<div className='card__content overflow-y-auto w-100'>
									<button className='btn btn-primary my-5'>Activate Vera</button>
								</div>
							</Card>
							<h2 className='text-center text-white'>Vera</h2>
						</Col>
						<Col key={5}>
							<Card className='card' id='vera1'>
								<div className='card__content overflow-y-auto w-100'>
									<button className='btn btn-primary my-5'>Activate Vera</button>
								</div>
							</Card>
							<h2 className='text-center text-white'>Vera</h2>
						</Col>
						<Col key={5}>
							<Card className='card' id='vera1'>
								<div className='card__content overflow-y-auto w-100'>
									<button className='btn btn-primary my-5'>Activate Vera</button>
								</div>
							</Card>
							<h2 className='text-center text-white'>Vera</h2>
						</Col>
						
						<Col key={6}>
							<Card className=''></Card>
							<h2 className='text-center text-white'>ToDo App</h2>
						</Col>
						{/* Additional Card components go here */}
					</Row>
				</Container>
			</div>
		</motion.div>
	);
};

export default Main;