import React, { useState } from 'react'

import PropTypes from 'prop-types'
import cal from '../Images/cal.png';

import './project2.css'

const Project2 = () => {
  return (
    <div className="thq-section-padding">
      <div className="project2-container1 thq-section-max-width">
        <div className="project2-tabs-menu">
          <div className="project2-tab-horizontal">
            <div className="project2-content">
              <h2 className="thq-heading-2">Calendar App</h2>
              <span className="thq-body-small">
                In a collaborative effort, our team of three has put together a 
                simple calendar app for Android. We used Java and SQLite in 
                Android Studio to make it. It does what you'd expect a calendar 
                to do: you can transfer your existing calendar into it, set up 
                reminders for your events, and search for specific events easily. 
                It's a straightforward, no-frills app that helps keep your schedule organized.


              </span>
              <p>Skills: Python, AWS, OpenAi API</p>
              <p>Github Link: <a href="https://github.com/AliToghani82/JARVIS">https://github.com/AliToghani82/JARVIS</a></p>
            </div>
          </div>
        </div>
        <div className="project2-image-container">
            <img
              src={cal}
              className="project1-image thq-img-ratio-16-9"
              alt="ROK Website Stat"
            />
        </div>
      </div>
    </div>
  )
}


export default Project2
