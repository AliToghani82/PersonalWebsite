import React from 'react';
import PropTypes from 'prop-types';
import TrafficLight from '../Images/TrafficLight.png';
import './items1.css';

const Project3 = () => {
  return (
    <div className="thq-section-padding">
      <div className="project1-container1 thq-section-max-width">
        <div className="project1-image-container">
          <img
            src={TrafficLight}
            className="project1-image"
            alt="Traffic Light Simulator"
          />
        </div>
        <div className="project1-tabs-menu">
          <div className="project1-tab-horizontal">
            <div className="project1-divider-container"></div>
            <div className="project1-content">
              <h2 className="thq-heading-2">Traffic Light Simulator</h2>
              <br />
              <span className="thq-body-small">
                <p>
                  The objective of our project was to simulate a realistic traffic light intersection. 
                  We designed a system where vehicles of varying sizes and pedestrians can signal 
                  their intent to cross. The hardware foundation is built on Arduino Uno, complemented 
                  by an array of sensors, including ultrasonic sensors and buttons. For software, 
                  we utilized MATLAB to program the logic and control mechanisms 
                  that manage the intersection's operation.
                </p>
              </span>
              <p><b>Skills:</b> Matlab, arduino uno</p>
              <p><b>Github Link:</b> <a href="https://github.com/AliToghani82/TrafficLightSim">https://github.com/AliToghani82/TrafficLightSim</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project3;
