import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Education.css'; // Import your custom styles

const Education = () => {
	return (
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
									<Card.Header className='card__title'>HVAC/R</Card.Header>

									<Card.Body className='card__description'>
										In 2019, I attended the Vocational Technical Institute (VTI)
										in Phoenix, Arizona, where I earned my diploma in Heating,
										Ventilation, Air Conditioning, and Refrigeration (HVAC/R).
										During my time at VTI, I diligently pursued additional
										certifications to enhance my skills and knowledge in the
										field. I successfully completed the Occupational Safety and
										Health Administration (OSHA) 10 certification, ensuring my
										commitment to workplace safety. Additionally, I obtained the
										North American Technician Excellence (N.A.T.E)
										certification, showcasing my expertise in HVAC/R systems.
										Moreover, I earned the Environmental Protection Agency (EPA)
										608 Universal certification, demonstrating my proficiency in
										handling refrigerants responsibly and safely. These
										certifications, combined with my education from VTI, have
										equipped me with the necessary skills and qualifications to
										excel in the HVAC/R industry.
									</Card.Body>
								</div>
							</Card>
						</Col>
						<Col key={2}>
							<Card className='card' id='janbask'>
								<div className='card__content overflow-y-auto w-100'>
									<Card.Header className='card__title'>
										Python Programming
									</Card.Header>
									<Card.Body className='card__description'>
										<Card.Text>
											In 2022, I completed JanBask Bootcamp, specializing in
											Python. The program covered essential topics like Pandas
											and data manipulation, providing hands-on experience and
											practical skills. This intensive training equipped me for
											success in data science and software development.
										</Card.Text>
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
											In 2022, I obtained my Penetration Testing, Incident
											Response, and Forensic certification from IBM through
											Coursera. This program provided hands-on training in
											cybersecurity, equipping me to identify vulnerabilities,
											respond to incidents, and conduct forensic analysis
											effectively. With this certification, I'm well-prepared to
											address evolving cyber threats and secure digital assets.
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
												In 2022, I achieved my IBM Cybersecurity Analyst
												certification through Coursera. This certification
												provided comprehensive training in cybersecurity,
												covering topics such as threat detection, incident
												response, and risk management. Through hands-on
												exercises and real-world scenarios, I gained practical
												skills and knowledge to identify and mitigate
												cybersecurity threats effectively. This certification
												equips me to contribute to the security posture of
												organizations and protect against cyber threats in
												today's digital landscape.
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
											Recently in 2023, I graduated from ECPI University with an
											Associate of Science degree in Mechanical Engineering.
											During my tenure, I completed a variety of courses
											essential to the field, including AutoCAD, Multisim,
											Introduction to Programming in C, and Inventor. These
											courses provided me with practical knowledge and hands-on
											experience, preparing me for a successful career in
											mechanical engineering. My education at ECPI University
											has equipped me with the skills and expertise necessary to
											excel in the field and contribute meaningfully to
											innovative projects and endeavors.
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
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco.
									</p>
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

export default Education;
