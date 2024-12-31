import "./Footer.css";

const Footer = ({ activeTab, handleActiveTab }) => {
  return (
    <div id="footer">
      <div className="social-links">
        <ul>
          <li>
            <a href="https://github.com/Johntizzyy" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/adepoju-john-470bb6259/"
              target="_blank"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a href="https://x.com/JohnTizzy5" target="_blank">
              X - Twitter
            </a>
          </li>
          <li>
            <a href="https://web.facebook.com/Johntizzzy/" target="_blank">
              Facebook
            </a>
          </li>
        </ul>
      </div>

      <div className="nav-links" id="n-l">
        <ul>
          <li className="link">
            <a
              className={`nav-link ${activeTab == "home" ? "active-nav" : ""}`}
              onClick={() => handleActiveTab("home")}
              href="#"
            >
              Home
            </a>
          </li>
          <li className="link">
            <a
              className={`nav-link ${
                activeTab == "portfolio" ? "active-nav" : ""
              }`}
              onClick={() => handleActiveTab("portfolio")}
              href="#portfolio-section"
            >
              Portfolio
            </a>
          </li>
          <li className="link">
            <a
              className={`nav-link ${activeTab == "about" ? "active-nav" : ""}`}
              onClick={() => handleActiveTab("about")}
              href="#about-sectionn"
            >
              About
            </a>
          </li>
          <li className="link">
            <a
              className={`nav-link ${
                activeTab == "contact" ? "active-nav" : ""
              }`}
              onClick={() => handleActiveTab("contact")}
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className="contact">
        <ul>
          <li>
            <a href="mailto:adepojujohn566@gmail.com">
              adepojujohn566@gmail.com
            </a>
          </li>
          <li>
            <a href="tel:+2348149026505">+23481 4902 6505</a>
          </li>
          <li>
            <a href="#">Adepoju John</a>
          </li>
        </ul>
      </div>

      <div className="copy">
        <a href="">&copy;Johntizzy 2024</a>
      </div>
    </div>
  );
};

export default Footer;
