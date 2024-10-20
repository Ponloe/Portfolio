import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
// import portfolioData from '../../data/portfolio.json';
import image1 from '../../assets/images/Project1.png';
import image2 from '../../assets/images/Project2.png';
import image3 from '../../assets/images/Project3.png';
import image4 from '../../assets/images/Project4.png';

const Portfolio = () => {
  const [letterClass, setLetterclass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterclass('text-animate-hover');
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const portfolioData = [
    {
      cover: image1,
      title: "Car Rental System",
      description: "Next, Typescript, CSS, API",
      url: "https://github.com/Ponloe/car-rental"
    },
    {
      cover: image2,
      title: "Task Automation and Workflow Management Tool",
      description: "PHP, MySQL, Bootstrap, Laravel",
      url: "https://github.com/Chansovisoth/CS262_Section2_Team10_Final"
    },
    {
      cover: image3,
      title: "Auto File Sorting System",
      description: "Python",
      url: "https://github.com/Ponloe/Auto-File-Sorting"
    },
    {
      cover: image4,
      title: "Telegram Bot",
      description: "Python, Telegram Bot API, Google Sheets, Google Script",
      url: "/"
    }
  ];

  console.log(portfolioData);

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((port, idx) => (
          <div className="image-box" key={idx}>
            <img
              src={port.cover}
              className="portfolio-image"
              alt="portfolio"
            />
            <div className="content">
              <p className="title">{port.title}</p>
              <h4 className="description">{port.description}</h4>
              <button className="btn" onClick={() => window.open(port.url)}>
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"portfolio".split("")}
            idx={15}
          />
        </h1>
        <div>{renderPortfolio(portfolioData)}</div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Portfolio;