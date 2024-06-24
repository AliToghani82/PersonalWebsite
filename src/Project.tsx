import React from 'react';
import './Project.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DV4 from './DV3png.png';
import TraficLight from './TrafficLight.png';
import rok from './rok.png';
import jarvis from './jarvis1.png'
import AppSS from './CappSS.png';

const projects = [
  {
    title: 'Visulization Notebook',
    image: DV4,
    githubLink: 'https://github.com/AliToghani82/Visualization_Notebook',
    description: 'This Visulization notebook was made to create a more efficent way of creating new Visulizations in the Dr. Nance lab.' +
    ' This notebook creates the code for each various visulizations, with options on changing the input file, and a easier way to' + 
    'navigate over writing code from scratch.',
  },
  {
    title: 'Calendar App',
    image: AppSS,
    githubLink: 'https://github.com/AliToghani82/Calendar-APP',
    description: 'In a collaborative effort, our team of three has put together a simple calendar app for Android.' + 
    ' We used Java and SQLite in Android Studio to make it. It does what you\'d expect a calendar to do: you can transfer' +
    ' your existing calendar into it, set up reminders for your events, and search for specific events easily. It\'s a straightforward,' 
    + ' no-frills app that helps keep your schedule organized.',
  },
  {
    title: 'Trafic Light Project',
    image: TraficLight,
    githubLink: 'https://github.com/AliToghani82/TrafficLightSim',
    description: 'The objective of our project was to simulate a realistic traffic light intersection. ' +
    'We designed a system where vehicles of varying sizes and pedestrians can signal their intent to cross. ' +
    'The hardware foundation is built on Arduino Uno, complemented by an array of sensors, including ultrasonic sensors and buttons. ' +
    'For software, we utilized MATLAB to program the logic and control mechanisms that manage the intersection\'s operation. ',
  },
  {
    title: 'GameStat Bot and Website',
    image: rok,
    githubLink: 'https://github.com/AliToghani82/StatBot',
    description: 'This bot was made to be used in the game, Rise of Kingdoms. There are many teams (400+ players in each team) for each'
    + ' season, and to collect stat of each player by hand, would take roughly 3 to 4 hours. This bot, would collect the stats automatically'
    + ' and polish the data, and uploads it to the website. The website allows each user to see their own stat and progress, as well as a '
    + 'ranking of players for each stat groups.',
  },
  {
    title: 'Jarvis',
    image: jarvis,
    githubLink: 'https://github.com/AliToghani82/JARVIS',
    description: "This bot is engineered to emulate the functionalities akin to JARVIS from the Marvel Cinematic Universe. " +
    "Utilizing the OpenAI ChatGPT API, it replicates JARVIS's informative responses and conversational style. " +
    "Google's speech-to-text technology captures user inputs, while Amazon Web Services' text-to-speech capabilities " +
    "articulate the ChatGPT responses in a refined British accent reminiscent of JARVIS.",
  },
];

const ProjectSlideshow = () => {
  const settings = {
    arrows: true,
    centerMode: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000, // Set the autoplay interval to 20 seconds (in milliseconds)
  };

  return (
    <>
        <hr id="line"></hr>
        <div className="slideshow-container">
            <Slider {...settings}>
                {projects.map((project, index) => (
                <div className="slide" key={index}>
                    <div className="image-container">
                    <a href={`#project-${index}`} target="_self">
                        <img src={project.image} alt={project.title} />
                    </a>
                    </div>
                    <h3 className="title">{project.title}</h3>
                </div>
                ))}
            </Slider>
        </div>
        <hr id="line1"></hr>
        <div className="project-list">
            {projects.map((project, index) => (
                <div className="project-entry" id={`project-${index}`} key={index}>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <img src={project.image} alt={project.title} className="project-image" />
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                    </a>
                    <a href={project.githubLink} className="github-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <i className="fab fa-github"></i> View on GitHub
                    </a>
                </div>
            ))}
        </div>
    </>
  );
};

export default ProjectSlideshow;
