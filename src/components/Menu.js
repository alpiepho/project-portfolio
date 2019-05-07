import React, { Component } from "react";
import "./Menu.css";

class Menu extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="navbar navbar-full navbar-fixed-top navbar-dark bg-primary">
        <button
          className="navbar-toggler navbar-toggler-left"
          type="button"
          data-toggle="collapse"
          data-target="#mainNavbarCollapse"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="navbar-collapse collapse navbar-toggleable-xl"
          id="mainNavbarCollapse"
        >
          <ul id="navbarNav" className="nav navbar-nav flex-row-reverse">
            <li className="nav-item">
              <a
                rel="noopener noreferrer"
                className="nav-link"
                href="#contacts"
              >
                Contacts
              </a>
            </li>
            <li className="nav-item">
              <a
                rel="noopener noreferrer"
                className="nav-link"
                href="#podcasts"
              >
                Podcasts
              </a>
            </li>
            <li className="nav-item">
              <a
                rel="noopener noreferrer"
                className="nav-link"
                href="#portfolio"
              >
                Web-Projects
              </a>
            </li>
            <li className="nav-item">
              <a rel="noopener noreferrer" className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a rel="noopener noreferrer" className="nav-link" href="#home">
                Home<span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Menu;
