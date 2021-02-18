import React from "react";
import img from "./../../../Assets/images/Group 11058.png";

const QuestionIcon = () => {
  return (
    <div style={{ marginRight: "100px" }}>
      <img src={img} alt="question icon" />
      <p style={{ fontWeight: "bold", fontSize: "35px", fontFamily: "RobotoHeading" }}>
        Do you
        <br />
        have a question?
      </p>
    </div>
  );
};

export default QuestionIcon;
