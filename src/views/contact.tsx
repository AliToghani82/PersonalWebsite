import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import ContactForm from '../components/contact-form10'
import Footer from '../components/footer'
import './contact.css'
import { title } from 'process'

const Contact = () => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact</title>
        <meta property="og:title" content="Contact" />
      </Helmet>
      <h1 className="contact-text">
        <span>Ali Toghani</span>
        <br></br>
      </h1>
      <Navbar rootClassName="navbar-root-class-name3"></Navbar>
      <div className="contact-credits">
        <div className="thq-divider-horizontal"></div>
      </div>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  )
}

export default Contact
