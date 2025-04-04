import React from 'react';
import PropTypes from 'prop-types';
import DV from '../Images/DV.png';
import './items1.css';

const Research1 = () => {
  return (
    <div className="thq-section-padding">
      <div className="project2-container1 thq-section-max-width">
        <div className="project2-tabs-menu">
          <div className="project2-tab-horizontal">
            <div className="project2-divider-container"></div>
            <div className="project2-content">
              <h2 className="thq-heading-2">Pipeline optimization using Cython</h2>
              <span className="thq-body-small">
                <p>
                Applied and expanded my knowledge of C++ and Cython to optimize a fluorescent image processing pipeline for ex-vivo brain slices. 
                I also Enhanced science communication skills using Html and JavaScript to present my research progress during meetings
                </p>
              </span>
              <p><b>Skills:</b> Python, C++, Cython, Pandas, Javascript, HTML, CSS</p>
              <p><b>Github Link:</b> <a href="https://github.com/AliToghani82/Visualization_Notebook">https://github.com/AliToghani82/Visualization_Notebook</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Research1;
