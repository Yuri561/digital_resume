import React from 'react';
import './Feedback.css';
import {FeedbackData} from '../Data/feedbackData';

function Feedback() {
    return (
			<div className='container feedback-wrapper  w-100'>
				{FeedbackData.map((update, index) => {
					return (
						<div className='feedback' key={index}>
							<img src={update.img} alt='profile' width={40} />
							<div className='noti'>
								<div style={{ marginBottom: '0.5rem' }}>
									<span>{update.name}</span>
									<span> {update.noti}</span>
								</div>
								<span>{update.time}</span>
							</div>
						</div>
					);
				})}
			</div>
		);
}

export default Feedback;
