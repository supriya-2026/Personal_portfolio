import React from "react";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <h2>Supriya Sahoo</h2>

        <p>
          Frontend Developer passionate about creating
          modern and responsive websites.
        </p>

        <div className="social-links">

          <a
            href="https://github.com/supriya-2026"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/supriya-sahoo-07a9b9308"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

         

        </div>

        <div className="footer-line"></div>

        <p className="copyright">
          © 2026 Supriya Sahoo. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;