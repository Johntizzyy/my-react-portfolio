import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('home');

  function handleActiveTab(tab) {
    setActiveTab(tab);
  }

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid d-flex justify-content-between order-bottom">
        <a className="navbar-brand" href="#">
          Johntizzy
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link p-3 home-nav "
                href="#"
                id={`${activeTab === 'home'? "active-nav":""}`}
                onClick={() => handleActiveTab('home')}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link p-3 ${
                  activeTab == "portfolio" ? "active-nav" : ""
                }`}
                href="#portfolio-section"
                onClick={() => handleActiveTab("portfolio")}
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link p-3 ${
                  activeTab == "about" ? "active-nav" : ""
                }`}
                href="#about-section"
                onClick={() => handleActiveTab("about")}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link p-3 ${
                  activeTab === "contact" ? "active-nav" : ""
                }`}
                href="#contact"
                onClick={() => handleActiveTab("contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
