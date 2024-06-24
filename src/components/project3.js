import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './project3.css'

const Project3 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="project3-container1 thq-section-max-width">
        <div className="project3-image-container">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="project3-image thq-img-ratio-16-9"
          />
        </div>
        <div className="project3-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="project3-tab-horizontal"
          >
            <div className="project3-divider-container">
              {activeTab === 0 && <div className="project3-container2"></div>}
            </div>
            <div className="project3-content">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <span className="thq-body-small">
                {props.feature1Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="project3-tab-horizontal1"
          >
            <div className="project3-divider-container1">
              {activeTab === 1 && <div className="project3-container3"></div>}
            </div>
            <div className="project3-content1">
              <h2 className="thq-heading-2">{props.feature2Title}</h2>
              <span className="thq-body-small">
                {props.feature2Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="project3-tab-horizontal2"
          >
            <div className="project3-divider-container2">
              {activeTab === 2 && <div className="project3-container4"></div>}
            </div>
            <div className="project3-content2">
              <h2 className="thq-heading-2">{props.feature3Title}</h2>
              <span className="thq-body-small">
                {props.feature3Description}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Project3.defaultProps = {
  feature3ImgAlt: 'Research Project Image 3',
  feature1Title: 'Research Overview',
  feature2ImgSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  feature2Description:
    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  feature1ImgAlt: 'Research Project Image 1',
  feature2ImgAlt: 'Research Project Image 2',
  feature1Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1524683745036-b46f52b8505a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTE5NTAxOHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Title: 'Research Findings',
  feature3Title: 'Data Analysis',
  imageSrc:
    'https://images.unsplash.com/photo-1718964313081-b363137c94e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8YWxsfDEzfHx8fHx8Mnx8MTcxOTE5NTAzNnw&ixlib=rb-4.0.3&q=80&w=1400',
  feature3Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  imageAlt: 'image',
  feature1ImgSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

Project3.propTypes = {
  feature3ImgAlt: PropTypes.string,
  feature1Title: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature2Description: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature1Description: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature2Title: PropTypes.string,
  feature3Title: PropTypes.string,
  imageSrc: PropTypes.string,
  feature3Description: PropTypes.string,
  imageAlt: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
}

export default Project3
