import { useState, useEffect } from "react";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMeme, setAllMeme] = useState([]);

  useEffect(() => {
    getMemeImage();
  }, []);

  async function getMemeImage() {
    const response = await fetch("https://api.imgflip.com/get_memes");
    const json = await response.json();
    const memes = json?.data?.memes;
    const randomNumber = Math.floor(Math.random() * memes.length);
    const url = memes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
    setAllMeme(memes);
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
          value={meme.topText}
          name="topText"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom Text"
          className="formInput"
          value={meme.bottomText}
          name="bottomText"
          onChange={handleChange}
        />
        <button className="formButton" onClick={getMemeImage}>
          Get a new image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} alt="Meme" className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
};

export default Meme;
