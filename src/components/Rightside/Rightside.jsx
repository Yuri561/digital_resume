import React, {useEffect} from "react";
import "./Rightside.css";
import Feedback from './../Feedback/Feedback';
import FeedbackReview from './../FeedbackReview/FeedbackReview';
import SubmitFeedBack from "../SubmitFeedBack/SubmitFeedBack";

const RightSide = () => {
    useEffect(() => {
      VanillaTilt.init(document.getElementById("submit"), {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
      });
    }, []);
  return (
    <aside className="RightSide">
      <div>
        <h3 className="mt-2">Feedback</h3>
        <Feedback />
        <SubmitFeedBack id='submit' />
      </div>
      <div>
        <h3>Ratings</h3>
        <FeedbackReview />
      </div>
    </aside>
  );
};

export default RightSide;
