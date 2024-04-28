import React from "react";
import "./Rightside.css";
import Feedback from './../Feedback/Feedback';
import FeedbackReview from './../FeedbackReview/FeedbackReview';

const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
        <h3 className="mt-2">Feedback</h3>
        <Feedback />
      </div>
      <div>
        <h3>Ratings</h3>
        <FeedbackReview />
      </div>
    </div>
  );
};

export default RightSide;
