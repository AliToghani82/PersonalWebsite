import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import ContactForm10 from '../components/contact-form10'
import './contact.css'
import { title } from 'process'

const Contact = () => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - Liquid Windy Gerbil</title>
        <meta property="og:title" content="Contact - Liquid Windy Gerbil" />
      </Helmet>
      <h1 className="contact-text">
        <span>Ali Toghani</span>
        <br></br>
      </h1>
      <Navbar rootClassName="navbar-root-class-name3"></Navbar>
      <div className="contact-credits">
        <div className="thq-divider-horizontal"></div>
      </div>
      <ContactForm10></ContactForm10>
    </div>
  )
}

export default Contact
