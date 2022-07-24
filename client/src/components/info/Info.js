import "./Info.css";
import { useState, useEffect } from "react";
import imagesData from "../shared/infoImagesData";

const Info = ({ click }) => {
  const [imageSrc, setImageSrc] = useState(imagesData[0]);
  const [bool, setBool] = useState(true);

  useEffect(() => {
    const randomImage = () => {
      let random = Math.floor(Math.random() * imagesData.length);
      setImageSrc(imagesData[random]);
      setBool((bool) => !bool);
    };

    const changeImage = setInterval(randomImage, 3000);

    return () => clearInterval(changeImage);
  }, []);

  return (
    <div className="info" id="about" onClick={click}>
      <div className="about-container">
        <div className="about-text-container">
          <div className="about-title">
            <h1>About</h1>
          </div>
          <div className="about-textarea">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
            sequi quos impedit architecto, eveniet porro. Totam, inventore
            quibusdam eligendi molestias, asperiores fugiat ipsam explicabo
            illum quia ipsum soluta nisi veniam.
          </div>
          <div className="about-button">
            <a href="/">Find out more</a>
          </div>
        </div>
        <div className="about-img-section">
          <img
            src={imageSrc}
            alt="about-img"
            className={bool ? "about-img-active" : "about-img"}
          />
        </div>
      </div>
    </div>
  );
};

export default Info;
