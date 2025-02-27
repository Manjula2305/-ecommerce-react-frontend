import React from 'react';
import './Footer2.css';
import pay from '../ASSETS/pay.png';
import footerlogo from '../ASSETS/logo.PNG';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer2 = () => {
  return (
    <div className="footer2">
      <div className="footerin1">
        {/* Logo & About */}
        <div className="f1">
          <img className="logo" src={footerlogo} alt="logo" />
          <p>
          ✅ Stay connected with us for exclusive deals and updates! 🌟<br />
          ✅  Follow us on social media or contact us for any assistance. 📞<br />
          ✅  We appreciate your support and look forward to serving you! ❤️
          </p>
        </div>

        {/* Quick Links */}
        <div className="f2">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/team">Our Team</a></li>
            <li><a href="/support">Customer Support</a></li>
          </ul>
        </div>

        {/* Policies */}
        <div className="f3">
          <h3>Policies</h3>
          <ul>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/return-policy">Return Policy</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/sitemap">Site Map</a></li>
          </ul>
        </div>

        {/* Community */}
        <div className="f4">
          <h3>Community</h3>
          <ul>
            <li><a href="/announcements">Announcements</a></li>
            <li><a href="/answer-center">Answer Center</a></li>
            <li><a href="/discussion-boards">Discussion Boards</a></li>
          </ul>
        </div>

        {/* Subscription */}
        <div className="f5">
          <h3>Subscribe</h3>
          <div className="inputcontainer">
            <input type="email" placeholder="Your Email" />
            <button className="send-btn">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footerin2">
        <p>© 2025 🥦 Grocery Shop 🛒. All Rights Reserved.</p>

        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon"><FaFacebook /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon"><FaInstagram /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon"><FaTwitter /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="icon"><FaLinkedin /></a>
        </div>

        <img src={pay} alt="Payment Methods" className="payment-img" />
      </div>
    </div>
  );
};

export default Footer2;
