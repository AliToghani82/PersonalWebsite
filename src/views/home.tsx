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
        <title>Liquid Windy Gerbil</title>
        <meta property="og:title" content="Liquid Windy Gerbil" />
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
      <Bio></Bio>
      <h1 className="home-title1 thq-heading-1">
        <span>My Resume</span>
        <br></br>
        <br></br>
      </h1>
      <iframe
        src="5f1fe218-8b9d-4edf-a3c0-e87a0437a184"
        className="home-iframe"
      ></iframe>
      <Footer></Footer>
    </div>
  )
}

export default Home
