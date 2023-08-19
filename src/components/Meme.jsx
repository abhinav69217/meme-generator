import { useState } from "react";
import memesData from "../assets/memesData";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prevMemeData) => ({
      ...prevMemeData,
      [name]: value,
    }));
  };

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top Text"
          className="formInput"
          value={FormData.topText}
          name="topText"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom Text"
          className="formInput"
          value={FormData.bottomText}
          name="bottomText"
          onChange={handleChange}
        />
        <button className="formButton" onClick={getMemeImage}>
          Get a new image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
};

export default Meme;
