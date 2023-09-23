import { useState } from "react";
import "./index.css";
import img from "./assets/coloring-smoke-ps.png";

const App = () => {
  const [images, setImages] = useState(null);
  const [value, setValue] = useState(null);
  const surpriseOptions = [
    "A blue ostrich eating melon",
    "A matisee style shark on the telephone",
    "A pineaple sunbathing on ane island",
  ];

  const surpriseMe = () => {
    const randomValue =
      surpriseOptions[Math.floor(Math.random() * surpriseOptions.length)];
    console.log(randomValue);
    setValue(randomValue);
  };

   const getImages = async () => {
    try {
      const options = {
        method: "POST",
        body: JSON.stringify({
          message: value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch("http://localhost:8000/images", options);
      const data = await response.json();
      console.log(data);
      setImages(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className='app'>
      <header className='header'>
        <h1>
          AI image <span>variations generator</span>
        </h1>
      </header>
      <section className='search-section'>
        <p>
          Start with a detailed description
          <span className='surprise' onClick={surpriseMe}>
            Surprise me
          </span>
        </p>
        <div className='input-container'>
          <input
            type='text'
            placeholder='An impressionist oil paintining of a sunflower i a purple vase...'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={getImages}>Generate</button>
        </div>
      </section>
      <section className='image-section'>
        {!images ? (
          <img src={img} alt='img' />
        ) : (
          images.map((image, _index) => (
            <img
              key={_index}
              src={image.url}
              alt={`Generate image of ${value}`}
            />
          ))
        )}
      </section>
    </div>
  );
};

export default App;
