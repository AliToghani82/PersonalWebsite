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
            <div className="project1-content">
              <h2 className="thq-heading-2">GameStat Tracker And Website</h2>
              <span className="thq-body-small">
                <p>
                GameStat Tracker is a personal project I built to collect and display seasonal KvK (Kingdom vs. Kingdom) 
                stats from a mobile game. The data is gathered using a Python script that leverages pytesseract for OCR 
                and pyautogui for screen automation to read player IDs, names, and other relevant info directly from the 
                game interface.

                The collected data is then uploaded to a Firebase Cloud Firestore database. On the frontend, 
                I use a React app built with TypeScript to fetch and display the data in a clean, user-friendly way. 
                The site is still a work in progress and I continue to maintain and improve it as I go.
                </p> <b>Future Improvements:</b>
                <p> I'm working on moving the entire data collection process to the cloud. 
                The plan is to host the script on an AWS EC2 instance and use AWS Lambda to 
                trigger the scan remotely. This will allow server leaders to initiate scans on-demand, 
                eliminating the need for manual runs on my end. The goal is to make the system fully automated, 
                scalable, and easier for others to interact with.
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
