import React, { useState } from 'react'

import PropTypes from 'prop-types'
import Rok_Website_Stat from '../Images/ROK_Website_Stat.png';
import Rok_Website_Rank from '../Images/ROK_Website_Rank.png';
import Rok_Website from '../Images/ROK_Website.png';

import './project3.css'

const Project3 = (props) => {
  const [activeTab, setActiveTab] = useState(0)

  const getActiveImageSrc = () => {
    if (activeTab === 0) {
      return props.feature1ImgSrc;
    } else if (activeTab === 1) {
      return props.feature2ImgSrc;
    } else if (activeTab === 2) {
      return props.feature3ImgSrc;
    }
    return props.imageSrc;
  };


  return (
    <div className="thq-section-padding">
      <div className="project3-container1 thq-section-max-width">
        <div className="project3-image-container">
          <img
            alt={props.imageAlt}
            src={getActiveImageSrc()}
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
              {activeTab === 0 && <span className="thq-body-small">This homepage displays an overview statistics of the kingdom showing from top 300 players</span>}
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
              {activeTab === 1 && <span className="thq-body-small">This homepage displays an overview statistics of each player</span>}

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
              {activeTab === 2 && <span className="thq-body-small">This homepage displays a ranking of all players based on kills and deaths</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Project3.defaultProps = {
  feature1Description: 'The main website of the kingdom in which users can see their stats',
  feature1ImgAlt: '',
  feature1ImgSrc: Rok_Website,
  feature1Title: 'Website Homepage',
  feature2Description: 'The main Stat Portion of the Website',
  feature2ImgAlt: '',
  feature2ImgSrc: Rok_Website_Stat,
  feature2Title: 'Website Dashboard',
  feature3Description: 'The User Ranking Per Kingdom',
  feature3ImgAlt: '',
  feature3ImgSrc: Rok_Website_Rank,
  feature3Title: 'Website Ranking',
  imageAlt: '',
  imageSrc: Rok_Website_Stat,
};

Project3.propTypes = {
  feature1Description: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature1Title: PropTypes.string,
  feature2Description: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature2Title: PropTypes.string,
  feature3Description: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature3Title: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
};


export default Project3
