import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Research1 from '../components/research1'
import Research2 from '../components/research2'
import Footer from '../components/footer'
import './research.css'

const Research = () => {
  return (
    <div className="research-container">
      <Helmet>
        <title>Research - Liquid Windy Gerbil</title>
        <meta property="og:title" content="Research - Liquid Windy Gerbil" />
      </Helmet>
      <h1 className="research-text">
        <span>Ali Toghani</span>
        <br></br>
      </h1>
      <Navbar rootClassName="navbar-root-class-name1"></Navbar>
      <div className="research-credits">
        <div className="thq-divider-horizontal"></div>
      </div>
      <Research1></Research1>
      <Research2></Research2>
      <Footer></Footer>
    </div>
  )
}

export default Research
