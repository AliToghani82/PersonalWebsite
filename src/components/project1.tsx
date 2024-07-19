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
                <p>Our gamestat tracker project harnesses Python scripts to gather data from 
                  diverse game APIs and user interactions. We meticulously curate and store 
                  game scores, playtime, achievements, and other metrics in a robust backend 
                  database. Powered by frameworks like Django or Flask, our frontend interface 
                  offers dynamic visualization through charts, graphs, and personalized dashboards. 
                  Dive into the realm of gaming analytics with us, where our project provides a 
                  seamless and interactive experience to track and analyze your gaming journey.</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project1
