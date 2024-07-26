import React, { useState } from 'react'

import PropTypes from 'prop-types'
import Jarvis from '../Images/Jarvis.png';

import './project2.css'

const Project2 = () => {
  return (
    <div className="thq-section-padding">
      <div className="project2-container1 thq-section-max-width">
        <div className="project2-tabs-menu">
          <div className="project2-tab-horizontal">
            <div className="project2-content">
              <h2 className="thq-heading-2">Jarvis</h2>
              <span className="thq-body-small">
                This bot is engineered to emulate the functionalities akin to JARVIS
                from the Marvel Cinematic Universe. Utilizing the OpenAI ChatGPT API,
                it replicates JARVIS's informative responses and conversational style.
                Google's speech-to-text technology captures user inputs, while Amazon
                Web Services' text-to-speech capabilities articulate the ChatGPT responses
                in a refined British accent reminiscent of JARVIS.
              </span>
              <p>Skills: Python, AWS, OpenAi API</p>
              <p>Github Link: <a href="https://github.com/AliToghani82/JARVIS">https://github.com/AliToghani82/JARVIS</a></p>
            </div>
          </div>
        </div>
        <div className="project2-image-container">
          <img
            src={Jarvis}
            className="project1-image thq-img-ratio-16-9"
            alt="ROK Website Stat"
          />
        </div>
      </div>
    </div>
  )
}


export default Project2
