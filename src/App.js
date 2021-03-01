import React, { useEffect, useState } from "react";
import BreedList from "./components/breedList/BreedList";
import DogDisplayer from "./components/dogDisplayer/DogDisplayer";
import "./App.css";

const App = () => {
  const [breeds, setBreeds] = useState([]);
  const [rndDogImage, setRndDogImage] = useState(null);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [selected, setSelected] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllBreeds = async () => {
      const res = await fetch(
        "https://dog.ceo/api/breeds/list/all"
      ).then((res) => res.json());
      setBreeds(Object.keys(res.message));
      setLoading(false);
    };
    getAllBreeds();
  }, []);

  const getRndDog = async (breed) => {
    const res = await fetch(
      `https://dog.ceo/api/breed/${breed}/images/random`
    ).then((res) => res.json());
    setRndDogImage(res.message);
    setSelected(true);
    setSelectedBreed(breed);
  };

  return (
    <div className="app">
      {loading && <h1> Loading breeds................</h1>}

      <div className="list">
        <h1>Dog Breed List</h1>
        {!loading && <BreedList breedList={breeds} getRndDog={getRndDog} />}
      </div>

      <div className="image">
        {!selected && <h1>Select a Breed to see Image</h1>}
        {selected && <h1>{selectedBreed}</h1>}
        <DogDisplayer image={rndDogImage} />
      </div>
    </div>
  );
};

export default App;
