import React, { useState } from 'react'

import PropTypes from 'prop-types'
import TrafficLight from '../Images/TrafficLight.png';

import './project1.css'

const Project3 = () => {
  return (
    <div className="thq-section-padding">
      <div className="project1-container1 thq-section-max-width">
        <div className="project1-image-container">
          <img
            src={TrafficLight}
            className="project1-image thq-img-ratio-16-9"
            alt="ROK Website Stat"
          />
        </div>
        <div className="project1-tabs-menu">
          <div className="project1-tab-horizontal">
            <div className="project1-divider-container"></div>
            <div className="project1-content">
              <h2 className="thq-heading-2">Traffic Light Simulator</h2>
              <br></br>
              <span className="thq-body-small">
                <p>The objective of our project was to simulate a realistic traffic light intersection. 
                  We designed a system where vehicles of varying sizes and pedestrians can signal 
                  their intent to cross. The hardware foundation is built on Arduino Uno, complemented 
                  by an array of sensors, including ultrasonic sensors and buttons. For software, 
                  we utilized MATLAB to program the logic and control mechanisms 
                  that manage the intersection's operation.</p>
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

export default Project3
