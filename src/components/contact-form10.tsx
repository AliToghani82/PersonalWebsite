import React, { useState } from 'react';
import './contact-form10.css';
import firebase from '../firebase'; // Adjust the path as needed
import { getFunctions, httpsCallable } from 'firebase/functions';

interface ContactEmailResponse {
  success: boolean;
  error?: string;
}

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const functions = getFunctions(firebase);
    const sendContactEmail = httpsCallable(functions, 'sendContactEmail');
    
    try {
      const result = await sendContactEmail({ name, email, message });
      const data = result.data as ContactEmailResponse;

      if (data.success) {
        alert('Email sent successfully!');

        setName('');
        setEmail('');
        setMessage('');
      } else {
        alert('Failed to send email: ' + data.error);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email');
    }
  };

  return (
    <div className="contact-form10-contact11 thq-section-padding">
      <div className="contact-form10-max-width thq-section-max-width">
        <div className="contact-form10-section-title thq-card">
          <div className="contact-form10-content">
            <h2 className="thq-heading-2">Contact Me</h2>
          </div>
          <span className="thq-body-small">I will get back to you as soon as possible</span>
        </div>
        <div className="contact-form10-content1">
          <form className="contact-form10-form thq-card" onSubmit={handleSubmit}>
            <div className="contact-form10-input">
              <label htmlFor="contact-form-10-name" className="thq-body-small">Name</label>
              <input
                type="text"
                id="contact-form-10-name"
                placeholder="Full Name"
                className="thq-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="contact-form10-input1">
              <label htmlFor="contact-form-10-email" className="thq-body-small">Email</label>
              <input
                type="email"
                id="contact-form-10-email"
                required
                placeholder="Email"
                className="contact-form10-text-input1 thq-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="contact-form10-container">
              <div className="contact-form10-input2"></div>
            </div>
            <div className="contact-form10-input3">
              <label htmlFor="contact-form-10-message" className="thq-body-small">Message</label>
              <textarea
                id="contact-form-10-message"
                rows={3}
                placeholder="Enter your message"
                className="thq-input"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="contact-form10-checkbox"></div>
            <button type="submit" className="thq-button-filled">
              <span className="thq-body-small">Submit</span>
            </button>
          </form>
          <div className="contact-form10-content2 thq-card">
            <div className="contact-form10-row thq-flex-row">
              <div className="contact-form10-content3">
                <svg viewBox="0 0 1024 1024" className="contact-form10-icon thq-icon-small">
                  <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                </svg>
                <div className="contact-form10-contact-info">
                  <h3 className="thq-heading-3">Email</h3>
                  <span className="thq-body-small">at007@uw.edu</span>
                </div>
              </div>
              <div className="contact-form10-content4"></div>
              <div>
                <svg viewBox="0 0 1024 1024" className="contact-form10-icon2 thq-icon-small">
                  <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
                </svg>
                <div className="contact-form10-contact-info1">
                  <h3 className="thq-heading-3">Location</h3>
                  <span className="thq-body-small">Seattle, WA</span>
                </div>
              </div>
            </div>
            <div className="thq-flex-row contact-form10-row1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d209529.96858926065!2d-122.44429035504014!3d47.614762805686756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906ac2b5c2291d%3A0xe0a65db205348d96!2sSeattle%2C%20WA%2C%20USA!5e0!3m2!1sen!2sro!4v1713441854828!5m2!1sen!2sro"
                title="Map"
                className="contact-form10-iframe thq-img-ratio-16-9"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
