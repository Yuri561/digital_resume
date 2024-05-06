import React, {useEffect} from "react";
import "./Rightside.css";
import Feedback from './../Feedback/Feedback';
import FeedbackReview from './../FeedbackReview/FeedbackReview';
import SubmitFeedBack from "../SubmitFeedBack/SubmitFeedBack";
import VanillaTilt from "vanilla-tilt";
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
    <aside className="RightSide container w-100">
      <div className="content h-100">
        <h3 className="mt-2">Feedback</h3>
        <Feedback />
        <SubmitFeedBack id='submit' />
        <FeedbackReview />
      </div>
    </aside>
  );
};

export default RightSide;
