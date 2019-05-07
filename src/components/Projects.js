import React, { Component } from "react";
import "./Projects.css";

class Projects extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div id="portfolio" className="portfolio">
        <div className="row">
          <div className="col-md-6">
            <h1>My Web Projects</h1>
            <p className="portfolio-description">
              These are some of the projects I have worked on. (Click on the
              image to go to that site.)
            </p>
          </div>
        </div>

        <div className="row picture-grid">
          {/* portfolio */}
          {/*
          <div className="col-md-6 col-md-offset-3 picture-grid-item">
          */}

          {/* fcc-dv-cert */}
          <div className="col-md-6 picture-grid-item">
            <p>
              Finished the Free Code Camp Data Visualization Certification!!
              (One more to go)
            </p>
            <p>
              <a
                rel="noopener noreferrer"
                href="https://www.freecodecamp.org/apiepho/data-visualization-certification"
                target="_blank"
              >
                <img
                  alt="thumbnail"
                  src="images/screenshot-fcc-dv-cert.png?raw=true"
                />
              </a>
            </p>
          </div>

          {/* rougelike */}
          <div className="col-md-6 picture-grid-item">
            <p>
              A freeCodeCamp Data Visuallization project to implement a
              Rouge-like game. Written in React.js. Seemed like a simple
              project, but was very involved.
            </p>
            <p>
              <a
                rel="noopener noreferrer"
                href="https://codepen.io/sd3x/full/ayQMLb/"
                target="_blank"
              >
                <img
                  alt="thumbnail"
                  src="images/screenshot-roguelike.png?raw=true"
                />
              </a>
            </p>
          </div>

          {/* purecss */}
          <div className="col-md-6 picture-grid-item">
            <p>
              Started Daily CSS Challenge to create complex graphics with just
              HTML and CSS. Have completed all 50. So amazing what is possible
              with just CSS!
            </p>
            <p>
              <a
                rel="noopener noreferrer"
                href="https://codepen.io/collection/DYpQdK/"
                target="_blank"
              >
                <img
                  alt="thumbnail"
                  src="images/screenshot-purecss.png?raw=true"
                />
              </a>
            </p>
          </div>

          {/* fcc-fe-cert */}
          <div className="col-md-6 picture-grid-item">
            <p>
              Finished the Free Code Camp Front Development Certification!! Only
              complaint is the number of cups of coffee that went cold because I
              was so focused :)
            </p>
            <p>
              <a
                rel="noopener noreferrer"
                href="https://www.freecodecamp.com/apiepho/front-end-certification"
                target="_blank"
              >
                <img
                  alt="thumbnail"
                  src="images/screenshot-fcc-fe-cert.png?raw=true"
                />
              </a>
            </p>
          </div>

          {/* simon */}
          <div className="col-md-6 picture-grid-item">
            <p>
              This is a game modeled after the original Simon game. See the link
              at the bottom for the original game instructions.
            </p>
            <p>
              <a
                rel="noopener noreferrer"
                href="https://codepen.io/sd3x/full/mmobeZ/"
                target="_blank"
              >
                <img
                  alt="thumbnail"
                  src="images/screenshot-simon.png?raw=true"
                />
              </a>
            </p>
          </div>

          {/* tic-tac-toe */}
          <div className="col-md-6 picture-grid-item">
            <p>
              A freeCodeCamp project, Tic Tac Toe game with many options. 1 or 2
              player. (Port to{" "}
              <a
                rel="noopener noreferrer"
                href="https://github.com/alpiepho/project-tic-tac-toe"
                target="_blank"
              >
                standalone
              </a>{" "}
              version with Selenium regression test.)
            </p>
            <p>
              <a
                rel="noopener noreferrer"
                href="https://codepen.io/sd3x/full/RVqxZz/"
                target="_blank"
              >
                <img
                  alt="thumbnail"
                  src="images/screenshot-tic-tac-toe.png?raw=true"
                />
              </a>
            </p>
          </div>

          {/* js calculator */}
          <div className="col-md-6 picture-grid-item">
            <p>
              With any luck this is not another boring old JavaScript
              calculator. This one has a cool font (if I say so myself) and lets
              you pick the animation for the button clicks. Enjoy!
            </p>
            <p>
              <a
                rel="noopener noreferrer"
                href="https://codepen.io/sd3x/full/qmMGqZ/"
                target="_blank"
              >
                <img
                  alt="thumbnail"
                  src="images/screenshot-js-calculator.png?raw=true"
                />
              </a>
            </p>
          </div>

          {/* rpn-hex-calc */}
          <div className="col-md-6 picture-grid-item">
            <p>
              A simple reverse-polish-notation hex calculator{" "}
              <span className="portfolio-span-blue">Chrome Extension</span>.
              Allows quick access to do simple hex operations and see the
              decimal value. Written in HTML, JavaScript, and jQuery. Also
              includes a Ruby/Watir Selenium test framework to verify all
              operations in a browser.
            </p>
            <p>
              <a
                rel="noopener noreferrer"
                href="https://github.com/apiepho/rpn_hex_calc"
                target="_blank"
              >
                <img
                  alt="thumbnail"
                  src="images/screenshot-rpn-hex-calc.png?raw=true"
                />
              </a>
            </p>
          </div>

          {/* sample-app */}
          <div className="col-md-6 picture-grid-item">
            <p>
              This is my implementation of the full sample_app from the 'Ruby on
              Rails Tutorial' by Michael Hartl. This is a well known online book
              for learning Ruby on Rails. (hosted on Heroku and can take 15-30
              seconds to load)
            </p>
            <p>
              <a
                rel="noopener noreferrer"
                href="https://bit.ly/thatname-group-portfolio-sample-app"
                target="_blank"
              >
                <img
                  alt="thumbnail"
                  src="images/screenshot-sample-app.png?raw=true"
                />
              </a>
            </p>
          </div>

          {/* gc-app */}
          <div className="col-md-6 picture-grid-item">
            <p>
              A Ruby based application to automate gathering baseball game data
              from an online service for youth/prep baseball teams. This tool
              uses the Watir Ruby Gem, an implementation of the Selenium API for
              automated web site testing. This is used to navigate to all the
              pages and scrap data from each page.
            </p>
            <p>
              <a
                rel="noopener noreferrer"
                href="https://github.com/apiepho/gc_app"
                target="_blank"
              >
                <img
                  alt="thumbnail"
                  src="images/screenshot-gc-app.png?raw=true"
                />
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
