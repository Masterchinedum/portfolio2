import React, { useState, useEffect } from 'react';
import './Hero.css';
import myselfImage from '../images/myself.png';

const Hero = () => {
  const texts = [
    "FULL-STACK WEB DEVELOPER",
    "WORDPRESS DESIGNER",
    "FINANCE ENTHUSIAST",
    "ACADEMIC WRITTER",
  ];
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 4000); // Change text every 4 seconds

    return () => clearInterval(interval);
  }, [texts.length]); //adds text.lengthas a dependency

  return (
    <div className="hero-container">
      <div className="left-div">
        <div className="greeting-text">
          <h1>I AM CHINEDU A</h1>
        </div>
        <div className="profession-text">
          <h1 className="text-white">
            {texts[currentText].split('*').map((part, index) => (
              <span key={index} className={`typewriter-text part-${index}`}>
                {part.split('').map((letter, index) => (
                  <span key={index}>{letter}</span>
                ))}
              </span>
            ))}
          </h1>
        </div>
        <div className="description-text">
          Continuous growth and learning are at the core of my design
          philosophy. I embrace new technologies, stay updated with the latest
          design trends, and consistently challenge myself to deliver fresh and
          impactful solutions.
        </div>
      </div>
      <div className="right-div">
        <img className="background-image" alt="" src={myselfImage} />
      </div>
    </div>
  );
};

export default Hero;
