import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';


function Contact() {
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
      <h2>Get In Touch</h2>
      <p>If you want to chat, collaborate, or just say hi, feel free to reach out!</p>

      <form ref={form} className="contact-form" onSubmit={sendEmail}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="user_name" placeholder="Your name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="user_email" placeholder="Your email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Your message" rows="5" required></textarea>

        <button type="submit">Send Message</button>
      </form>

    </section>
  );
}

export default Contact;