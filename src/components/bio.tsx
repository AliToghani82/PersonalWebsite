import React from 'react'

import PropTypes from 'prop-types'
import AliImage from '../Images/Ali.jpg';
import './bio.css'

const Bio = () => {
  return (
    <div className="bio-layout349 thq-section-padding">
      <div className="bio-max-width thq-section-max-width">
        <div className="bio-image-container">
          <img
            alt="myPicture"
            src={AliImage}
            className="bio-image thq-img-ratio-16-9"
          />
        </div>
        <div className="bio-content">
          <div className="bio-section-title">
            <div className="bio-content1">
              <p className="thq-body-large">HIII</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Bio
