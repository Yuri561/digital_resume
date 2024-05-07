import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Projects.css'; // Import your custom styles


const Projects = () => {
	return (
		<motion.div
			initial={{ scale: 0 }} // Initial state: scaled down
			animate={{ scale: 1 }} // Animation: zoom in to full size
			exit={{ scale: 0 }} // Exit animation: scale down to hide
			transition={{ type: 'spring', stiffness: 260, damping: 20 }} // Smooth spring transition
			className='text-center d-flex flex-md-column justify-content-md-start p-3 wrapper-pro '>
			<div className='education-content d-flex flex-column justify-content-start justify-content-sm-center justify-content-xl-start w-100 align-items-center rounded h-100'>
				<h1 className='text-center'>Projects</h1>
				<Container className='my-3'>
					<Row
						xs={1}
						md={3}
						className='row-cols-2 row-cols-lg-3 row-cols-md-3 g-2 g-lg-3 g-4'>
						<Col key={1} style={{ height: 'auto;' }}>
							<Card id='ubank'>
								<div className='card__content overflow-y-auto w-100'>
									<Card.Header className='card__title'>
										U-Bank Banking App
									</Card.Header>

									<Card.Body className='card__description'></Card.Body>
								</div>
							</Card>
						</Col>
						<Col key={2}>
							<Card className='card' id='rae'>
								<div className='card__content overflow-y-auto w-100'>
									<Card.Header className='card__title'>
										Cooking with RAE
									</Card.Header>
									<Card.Body className='card__description'>
										<p></p>
									</Card.Body>
								</div>
							</Card>
						</Col>
						<Col key={3}>
							<Card id='ufirst'>
								<div className='card__content overflow-y-auto w-100'>
									<Card.Header className='card__title'>
										U-First Web App
									</Card.Header>
									<Card.Body className='card__description'></Card.Body>
								</div>
							</Card>
						</Col>
						<Col key={4}>
							<Card className='card' id='ayiti'>
								<div className='card__content overflow-y-auto w-100'>
									<Card.Header className='card__title'>
										Ayiti Blog Post
									</Card.Header>
									<Card.Body className='card__description'>
										<p></p>
									</Card.Body>
								</div>
							</Card>
						</Col>
						<Col key={5}>
							<Card className='card' id='utemp'>
								<div className='card__content overflow-y-auto w-100'>
									<Card.Header className='card__title'>
										U-Temp EMS Dashboard
									</Card.Header>
									<Card.Body className='card__description'>
										<p></p>
									</Card.Body>
								</div>
							</Card>
						</Col>
						<Col key={6}>
							<Card className='card' id='vera'>
								<div className='card__content overflow-y-auto w-100'>
									<Card.Header className='card__title'>
										Vera Assist Pro
									</Card.Header>
									<p className='card__description'></p>
								</div>
							</Card>
						</Col>
						{/* Repeat for other cards */}
					</Row>
				</Container>
			</div>
		</motion.div>
	);
};

export default Projects;
