import React from 'react'

import PropTypes from 'prop-types'

import './project-gallery.css'

const ProjectGallery = (props) => {
  return (
    <div className="project-gallery-gallery3 thq-section-padding">
      <div className="project-gallery-max-width thq-section-max-width">
        <div className="project-gallery-section-title">
          <h2 className="project-gallery-text thq-heading-2">
            {props.heading1}
          </h2>
          <span className="project-gallery-text1 thq-body-large">
            {props.content1}
          </span>
        </div>
        <div className="project-gallery-container">
          <div className="project-gallery-content">
            <div
              data-thq="slider"
              data-navigation="true"
              data-pagination="true"
              className="project-gallery-slider swiper"
            >
              <div
                data-thq="slider-wrapper"
                className="project-gallery-slider-wrapper swiper-wrapper"
              >
                <div
                  data-thq="slider-slide"
                  className="project-gallery-slider-slide swiper-slide"
                >
                  <div className="project-gallery-container1">
                    <img
                      alt={props.image2Alt}
                      src={props.image2Src}
                      className="project-gallery-image2 thq-img-ratio-4-3"
                    />
                  </div>
                </div>
                <div
                  data-thq="slider-slide"
                  className="project-gallery-slider-slide1 swiper-slide"
                >
                  <div className="project-gallery-container2">
                    <img
                      alt={props.image4Alt}
                      src={props.image4Src}
                      className="project-gallery-image4 thq-img-ratio-4-3"
                    />
                  </div>
                </div>
                <div
                  data-thq="slider-slide"
                  className="project-gallery-slider-slide2 swiper-slide"
                >
                  <div className="project-gallery-container3">
                    <img
                      alt={props.image6Alt}
                      src={props.image6Src}
                      className="project-gallery-image6 thq-img-ratio-4-3"
                    />
                  </div>
                </div>
              </div>
              <div
                data-thq="slider-button-prev"
                className="swiper-button-prev"
              ></div>
              <div
                data-thq="slider-button-next"
                className="swiper-button-next"
              ></div>
              <div
                data-thq="slider-pagination"
                className="project-gallery-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
              >
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ProjectGallery.defaultProps = {
  image6Alt: 'Project 6',
  image4Alt: 'Project 4',
  content1: 'Explore Some of my finished and ongoing projects',
  image2Alt: 'Project 2',
  image6Src:
    'https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTE5NDAwOHw&ixlib=rb-4.0.3&q=80&w=1080',
  image2Src:
    'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTE5NDAwOHw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: 'Project Gallery',
  image4Src:
    'https://images.unsplash.com/photo-1634320717087-b6899a0ec1c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTE5NDAwOHw&ixlib=rb-4.0.3&q=80&w=1080',
}

ProjectGallery.propTypes = {
  image6Alt: PropTypes.string,
  image4Alt: PropTypes.string,
  content1: PropTypes.string,
  image2Alt: PropTypes.string,
  image6Src: PropTypes.string,
  image2Src: PropTypes.string,
  heading1: PropTypes.string,
  image4Src: PropTypes.string,
}

export default ProjectGallery
