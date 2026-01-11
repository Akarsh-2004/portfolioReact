import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_12h3c2j',
      'template_yhw6rp1',
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        alert("Message sent!");
        form.current.reset();
      })
      .catch((error) => {
        alert("Something went wrong: " + error.text);
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Get In Touch</h2>
          <p>Interested in collaborating or just want to say hi? Feel free to reach out!</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-card">
              <FaEnvelope className="icon" />
              <h3>Email</h3>
              <p>Akarshsaklani222@gmail.com</p>
            </div>
            <div className="contact-card">
              <FaLinkedin className="icon" />
              <h3>LinkedIn</h3>
              <a href="https://linkedin.com/in/akarshsaklani" target="_blank" rel="noopener noreferrer">Let's Connect</a>
            </div>
            <div className="contact-card">
              <FaGithub className="icon" />
              <h3>GitHub</h3>
              <a href="https://github.com/Akarsh-2004" target="_blank" rel="noopener noreferrer">Explore Code</a>
            </div>
          </div>

          <form ref={form} className="contact-form" onSubmit={sendEmail}>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" name="user_name" placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" name="user_email" placeholder="john@example.com" required />
            </div>
            <div className="form-group">
              <label>Your Message</label>
              <textarea name="message" placeholder="Hello! I'd like to talk about..." rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;