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
              <h2 className="thq-heading-2">Data Visualization Notebook</h2>
              <span className="thq-body-small">
                <p>
                  This Visualization Notebook was developed to enhance the efficiency of creating 
                  visualizations in Dr. Nance's lab. It provides pre-written code templates for 
                  various types of visualizations, allowing researchers to modify and adapt them 
                  easily by changing the input file and adjusting parameters. This approach eliminates 
                  the need to write code from scratch, saving time and effort. The notebook offers 
                  flexibility with options to customize the appearance and functionality of 
                  visualizations, making it suitable for a range of data visualization needs. 
                  Its intuitive interface ensures easy navigation and accessibility, even for 
                  those with limited coding experience. By automating much of the visualization process, 
                  the notebook ensures consistency and accuracy in data representation. This tool is 
                  invaluable for the lab, supporting effective data analysis and the clear communication 
                  of research findings, ultimately advancing scientific understanding through innovative 
                  visualization techniques.
                </p>
              </span>
              <p><b>Skills:</b> Python, Matplotlib, Cython, Pandas</p>
              <p><b>Github Link:</b> <a href="https://github.com/AliToghani82/Visualization_Notebook">https://github.com/AliToghani82/Visualization_Notebook</a></p>
            </div>
          </div>
        </div>
        <div className="project2-image-container">
          <img
            src={DV}
            className="project2-image"
            alt="Data Visualization Notebook"
          />
        </div>
      </div>
    </div>
  );
}

export default Research1;
