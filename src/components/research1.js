import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './research1.css'

const Research1 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className={`thq-section-padding ${props.rootClassName} `}>
      <div className="research1-container1 thq-section-max-width">
        <div className="research1-image-container">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="research1-image thq-img-ratio-16-9"
          />
        </div>
        <div className="research1-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="research1-tab-horizontal"
          >
            <div className="research1-divider-container">
              {activeTab === 0 && <div className="research1-container2"></div>}
            </div>
            <div className="research1-content">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <span className="thq-body-small">
                {props.feature1Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="research1-tab-horizontal1"
          >
            <div className="research1-divider-container1">
              {activeTab === 1 && <div className="research1-container3"></div>}
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="research1-tab-horizontal2"
          >
            <div className="research1-divider-container2">
              {activeTab === 2 && <div className="research1-container4"></div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Research1.defaultProps = {
  imageAlt: 'image',
  feature2Title: 'Research Findings',
  feature3Title: 'Data Analysis',
  feature2Description:
    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  feature1Title: 'Research Overview',
  feature1Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  feature3Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  imageSrc:
    'https://images.unsplash.com/photo-1718964313081-b363137c94e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8YWxsfDEzfHx8fHx8Mnx8MTcxOTE5NTAzNnw&ixlib=rb-4.0.3&q=80&w=1400',
  rootClassName: '',
}

Research1.propTypes = {
  imageAlt: PropTypes.string,
  feature2Title: PropTypes.string,
  feature3Title: PropTypes.string,
  feature2Description: PropTypes.string,
  feature1Title: PropTypes.string,
  feature1Description: PropTypes.string,
  feature3Description: PropTypes.string,
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Research1
