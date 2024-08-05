import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Project1 from '../components/project1'
import Project2 from '../components/project2'
import Project3 from '../components/project3'
import Project4 from '../components/project4'
import Footer from '../components/footer'
import './project.css'

const Project = () => {
  return (
    <div className="project-container">
      <Helmet>
        <title>Projects</title>
        <meta property="og:title" content="Projects" />
      </Helmet>
      <h1 className="project-text">
        <span>Ali Toghani</span>
        <br></br>
      </h1>
      <Navbar rootClassName="navbar-root-class-name2"></Navbar>
      <div className="project-credits">
        <div className="thq-divider-horizontal"></div>
      </div>
      <Project1></Project1>
      <Project2></Project2>
      <Project3></Project3>
      <Project4></Project4>
      <Footer></Footer>
    </div>
  )
}

export default Project
