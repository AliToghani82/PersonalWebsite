import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Bio from '../components/bio'
import Footer from '../components/footer'
import './home.css'

const Home = () => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Ali Toghani</title>
        <meta property="og:title" content="Ali Toghani" />
      </Helmet>
      <h1 className="home-text">
        <span>Ali Toghani</span>
        <br></br>
      </h1>
      <Navbar rootClassName="navbar-root-class-name"></Navbar>
      <div className="home-credits">
        <div className="thq-divider-horizontal"></div>
      </div>
      <h1 className="home-title thq-heading-1">
        <span>About Me</span>
        <br></br>
      </h1>
      {<Bio></Bio>}
      <h1 className="home-title1 thq-heading-1">
        <span>My Resume</span>
        <br></br>
        <br></br>
      </h1>
      <iframe
        src={`${process.env.PUBLIC_URL}/AliToghani_Resume.pdf`}
        className="home-iframe"
        title="Ali Toghani Resume"
      ></iframe>
      <Footer></Footer>
    </div>
  )
}

export default Home
