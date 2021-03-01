import React from "react";
import img from "../../assets/images/emptyDog.jpg";
import "./styles/DogDisplayer.css";

const DogDisplayer = ({ image }) => {
  return (
    <div className="dog">
      <img src={image ? image : img} alt="dog-photo" />
    </div>
  );
};

export default DogDisplayer;
