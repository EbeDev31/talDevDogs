import React from "react";
import "./styles/BreedList.css";

const BreedList = ({ breedList, getRndDog }) => {
  return (
    <div className="breed-list">
      {breedList.map((breed) => (
        <div
          className="breed-button"
          key={breed}
          onClick={() => getRndDog(breed)}
        >
          {breed}
        </div>
      ))}
    </div>
  );
};

export default BreedList;
