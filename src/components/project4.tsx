import React from 'react';
import PropTypes from 'prop-types';
import Jarvis from '../Images/Jarvis.png';
import './project2.css';

const Project2 = () => {
  return (
    <div className="thq-section-padding">
      <div className="project2-container1 thq-section-max-width">
        <div className="project2-tabs-menu">
          <div className="project2-tab-horizontal">
            <div className="project2-divider-container"></div>
            <div className="project2-content">
              <h2 className="thq-heading-2">Jarvis</h2>
              <br />
              <span className="thq-body-small">
                <p>
                  This bot is engineered to emulate the functionalities akin to JARVIS
                  from the Marvel Cinematic Universe. Utilizing the OpenAI ChatGPT API,
                  it replicates JARVIS's informative responses and conversational style.
                  Google's speech-to-text technology captures user inputs, while Amazon
                  Web Services' text-to-speech capabilities articulate the ChatGPT responses
                  in a refined British accent reminiscent of JARVIS.
                </p>
              </span>
              <p><b>Skills:</b> Python, AWS, OpenAi API, speech_recognition, boto3</p>
              <p><b>Github Link:</b> <a href="https://github.com/AliToghani82/JARVIS">https://github.com/AliToghani82/JARVIS</a></p>
            </div>
          </div>
        </div>
        <div className="project2-image-container">
          <img
            src={Jarvis}
            className="project2-image"
            alt="Jarvis Bot"
          />
        </div>
      </div>
    </div>
  )
}

export default Project2;
