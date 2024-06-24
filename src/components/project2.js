import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './project2.css'

const Project2 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="project2-container1 thq-section-max-width">
        <div className="project2-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="project2-tab-horizontal"
          >
            <div className="project2-divider-container">
              {activeTab === 0 && <div className="project2-container2"></div>}
            </div>
            <div className="project2-content">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <span className="thq-body-small">
                {props.feature1Description}
              </span>
            </div>
          </div>
        </div>
        <div className="project2-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="project2-image thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="project2-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="project2-image2 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

Project2.defaultProps = {
  feature1ImgAlt: 'Research Findings Image Alt Text',
  feature2ImgSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  feature2Title: 'Data Analysis',
  feature3Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in dui fermentum, sit amet ultricies turpis tincidunt.',
  feature3Title: 'Conclusion',
  feature2Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in dui fermentum, sit amet ultricies turpis tincidunt.',
  feature1Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in dui fermentum, sit amet ultricies turpis tincidunt.',
  feature2ImgAlt: 'Data Analysis Image Alt Text',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTE5NDk3NXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Title: 'Research Findings',
  feature3ImgAlt: 'Conclusion Image Alt Text',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1590935216595-f9fc9b65179d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTE5NDk3NXw&ixlib=rb-4.0.3&q=80&w=1080',
}

Project2.propTypes = {
  feature1ImgAlt: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature2Title: PropTypes.string,
  feature3Description: PropTypes.string,
  feature3Title: PropTypes.string,
  feature2Description: PropTypes.string,
  feature1Description: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature1Title: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
}

export default Project2
