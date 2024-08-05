import React from 'react';
import PropTypes from 'prop-types';
import curve from '../Images/curve.png';
import './items1.css';

const Research1 = () => {
  return (
    <div className="thq-section-padding">
      <div className="project1-container1 thq-section-max-width">
        <div className="project1-image-container">
          <img
            src={curve}
            className="project1-image"
            alt="Deep Learning with MPT"
          />
        </div>
        <div className="project1-tabs-menu">
          <div className="project1-tab-horizontal">
            <div className="project1-divider-container"></div>
            <div className="project1-content">
              <h2 className="thq-heading-2">Deep Learning with MPT</h2>
              <br />
              <span className="thq-body-small">
                <p>
                  Our research project in Dr. Nance's Lab at the University of Washington focuses on
                  applying advanced deep learning techniques to Multiple Particle Tracking (MPT) data.
                  The primary goal is to enhance the accuracy of predicting nanoparticle trajectories,
                  which is crucial for various scientific and industrial applications. By developing
                  and implementing sophisticated neural network models, we aim to uncover intricate
                  patterns and interactions within the MPT data that traditional methods may miss.
                  This innovative approach not only advances our understanding of particle behavior
                  but also contributes to the broader field of data analysis in nanotechnology.
                  We are also creating an open-source Python package to facilitate MPT data analysis,
                  making these cutting-edge techniques accessible to researchers worldwide.
                  This project is supported by the Washington Research Foundation Fellowship for 2023-2024,
                  highlighting its potential to make significant contributions to the field.
                </p>
              </span>
              <p><b>Skills:</b> Python, Pytorch, Machine Learning, Deep Learning, LSTM, Transformers</p>
              <p><b>Github Link:</b> <a href="https://github.com/BeckResearchLab/diff_transformers/tree/main/project">https://github.com/BeckResearchLab/diff_transformers/tree/main/project</a></p>
              <p><b>Awards:</b> 2023 - 2024 Washington Research Foundation (WRF) Fellowship</p>
              <p><b>Presentations:</b> SciPy 2024 Poster Presentation, Mary Gates Symposium</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Research1;
