import React from 'react';
import PropTypes from 'prop-types';
import Rok_Website_Stat from '../Images/ROK_Website_Stat.png';
import './items1.css';

const Project1 = () => {
  return (
    <div className="thq-section-padding">
      <div className="project1-container1 thq-section-max-width">
        <div className="project1-image-container">
          <img
            src={Rok_Website_Stat}
            className="project1-image"
            alt="ROK Website Stat"
          />
        </div>
        <div className="project1-tabs-menu">
          <div className="project1-tab-horizontal">
            <div className="project1-divider-container"></div>
            <div className="project1-content">
              <h2 className="thq-heading-2">GameStat Tracker And Website</h2>
              <br />
              <span className="thq-body-small">
                <p>
                  The GameStat Tracker is a project designed to revolutionize the way statistics can be collected and monitored for analysis in-game statistics. 
                  This tracking tool leverages a script written to collect, process, and display real-time data on player performance and game mechanics. 
                  Whether you're a casual gamer seeking to understand your skills or a leader aiming to understand players statistics, GameStat Tracker provides analytics that can 
                  enhance the gaming experience. The platform features customizable dashboards, detailed performance reports, and intuitive visualizations, all accessible through a user-friendly 
                  interface. By offering deep insights into gaming data, GameStat Tracker empowers users to make informed decisions, refine strategies, and ultimately, elevate 
                  their gaming experience to new heights.
                </p>
              </span>
              <p><b>Skills:</b> Python (pyautogui, pytesseract), Typescript, Javascript, React, HTML/CSS</p>
              <p><b>Github Link:</b> <a href="https://github.com/AliToghani82/K1418">https://github.com/AliToghani82/K1418</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project1;
