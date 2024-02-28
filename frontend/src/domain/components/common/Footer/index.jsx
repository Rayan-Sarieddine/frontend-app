import React, { useState } from "react";
import "./style.css";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) {
      console.log("Please Enter Email");
      return;
    }
    console.log(email);
  };
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo-section">
          <span className="logo">pwr chain</span>
          <nav className="footer-nav">
            <p className="footer-link">Explore</p>
            <p className="footer-link">Transactions</p>
            <p className="footer-link">Nodes</p>
            <p className="footer-link">PWR Wallet</p>
          </nav>
          <div className="socials-section">
            <p className="social-link twitter">Join our Twitter</p>
            <p className="social-link telegram">Join our Telegram</p>
            <p className="social-link discord">Join our Discord</p>
          </div>
        </div>

        <div className="newsletter-section">
          <form onSubmit={handleSubmit}>
            <label htmlFor="newsletter-input" className="newsletter-label">
              Join our newsletter
            </label>
            <div className="inputs">
              <input
                type="email"
                id="newsletter-input"
                className="newsletter-input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="newsletter-button">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="copyright">
          @IOWM Protocol Pte. Ltd. All Rights Reserved
        </span>
        <div className="footer-terms">
          <p className="terms-link">Terms</p>
          <p className="terms-link">Privacy</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
