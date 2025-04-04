import React from 'react';
import PropTypes from 'prop-types';
import curve from '../Images/curve.png';
import './items1.css';

const Research3 = () => {
  return (
    <div className="thq-section-padding">
      <div className="project1-container1 thq-section-max-width">
        <div className="project1-image-container">
        </div>
        <div className="project1-tabs-menu">
          <div className="project1-tab-horizontal">
            <div className="project1-divider-container"></div>
            <div className="project1-content">
              <h2 className="thq-heading-2">Understanding and evaluating shapes of microglia using geomStat</h2>
              <span className="thq-body-small">
                <p>
                Integrated the GeomStat package into the data processing pipeline to analyze and evaluate microglia shapes, 
                enhancing the understanding of their structural characteristics
                </p>
              </span>
              <p><b>Skills:</b> Python, GeoMstats</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Research3;
