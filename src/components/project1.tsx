import React, { useState } from 'react'

import PropTypes from 'prop-types'
import Rok_Website_Stat from '../Images/ROK_Website_Stat.png';

import './project1.css'

const Project1 = () => {
  return (
    <div className="thq-section-padding">
      <div className="project1-container1 thq-section-max-width">
        <div className="project1-image-container">
          <img
            src={Rok_Website_Stat}
            className="project1-image thq-img-ratio-16-9"
            alt="ROK Website Stat"
          />
        </div>
        <div className="project1-tabs-menu">
          <div className="project1-tab-horizontal">
            <div className="project1-divider-container"></div>
            <div className="project1-content">
              <h2 className="thq-heading-2">GameStat Tracker And Website</h2>
              <br></br>
              <span className="thq-body-small">
                <p>The GameStat Tracker is an innovative project designed to revolutionize 
                  the way gamers and developers monitor and analyze in-game statistics. 
                  This comprehensive tracking tool leverages advanced algorithms to collect, 
                  process, and display real-time data on player performance, game mechanics, 
                  and overall gameplay trends. Whether you're a casual gamer seeking to 
                  improve your skills or a developer aiming to understand player behavior, 
                  GameStat Tracker provides insightful analytics that can enhance the gaming 
                  experience. The platform features customizable dashboards, detailed performance 
                  reports, and intuitive visualizations, all accessible through a user-friendly 
                  interface. By offering deep insights into gaming data, GameStat Tracker empowers 
                  users to make informed decisions, refine strategies, and ultimately, elevate 
                  their gaming experience to new heights.</p>
              </span>
              <p>Skills: Python, AWS, OpenAi API</p>
              <p>Github Link: <a href="https://github.com/AliToghani82/JARVIS">https://github.com/AliToghani82/JARVIS</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project1
