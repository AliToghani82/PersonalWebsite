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
              <p className="thq-body-large">
                I am a Senior studying Computer Science (CS) at University of Washington. I am currently looking for opportunities to learn more about Machine Learning and Computer vision. I am working as an undergraduate researcher at laboratory of Dr. Elizabeth Nance (University of Washington) creating a new deep learning model that will predicts trajectories of Particles.
                I received my Associates of Arts and Sciences from Whatcom Community College (WCC) in 2022. I worked as a Math and Computer Science tutor at WCC Math Center for about 2 years. Working as a tutor, encouraged me to start a project, in which tutors and students can be connected to each other on an app that would make in-person tutoring easier.
                Additionally, I am passionate about increasing access to STEM Education. I worked as TRIO Upward Bound mentor and gave presentations and hosted different workshops for students in the rural areas of Whatcom County.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Bio
