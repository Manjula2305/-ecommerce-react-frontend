import React from 'react';
import './ContactPage.css'; // Import the CSS file

const ContactPage = () => {
  return (
    <div className="contact-page"> {/* Add a class to the main div */}
      <h1>Contact Us</h1>
      <p>Do you have questions or need assistance?  Please contact us below.</p>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" /><br /><br />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" /><br /><br />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message"></textarea><br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactPage;