import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './project1.css'

const Project1 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="project1-container1 thq-section-max-width">
        <div className="project1-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="project1-image thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="project1-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="project1-image2 thq-img-ratio-16-9"
            />
          )}
        </div>
        <div className="project1-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="project1-tab-horizontal"
          >
            <div className="project1-divider-container">
              {activeTab === 0 && <div className="project1-container2"></div>}
            </div>
            <div className="project1-content">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <span className="thq-body-small">
                {props.feature1Description}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Project1.defaultProps = {
  feature1Title: 'Cutting-Edge Research',
  feature1Description:
    'Our research project focuses on cutting-edge technologies such as quantum computing, artificial intelligence, Internet of Things, augmented reality, and biotechnology. We are exploring the potential of these innovative fields to shape the future and drive advancements in various industries. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. For more information about our project, please contact us at [contact information]. Copyright © 2022 Ali Toghani. All rights reserved.',
  feature1ImgAlt: 'Cutting-Edge Research Image',
  feature2ImgAlt: 'Author Information Image',
  feature3ImgAlt: 'Contact Section Image',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1579873666517-3a6620fecba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTE5NDUxOXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImgSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTE5NDUxOXw&ixlib=rb-4.0.3&q=80&w=1080',
}

Project1.propTypes = {
  feature1Title: PropTypes.string,
  feature1Description: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
}

export default Project1
