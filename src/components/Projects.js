import React, { Component } from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard.js";

class Projects extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let data = [ 
      {
        text: "RPN Hex Calculator Chrome Extension (Published to Chrome Store)",
        href: "https://chrome.google.com/webstore/detail/rpn-hex-calculator/koffmhlebmnnlgdlgfkpiglpfgjlkcmc",
        image: "images/screenshot-rpn-hex-chrome.png?raw=true"
      },
      {
        text: "RPN Hex Calculator VS Code Extension (Published to Microsoft Marketplace)",
        href: "https://marketplace.visualstudio.com/items?itemName=thatnamegroup.rpn-hex-calc",
        image: "images/screenshot-rpn-hex-vscode.png?raw=true"
      },
      {
        text: "Started Daily CSS Challenge to create complex graphics with just HTML and CSS. Have completed all 50. So amazing what is possible with just CSS!",
        href: "https://codepen.io/collection/DYpQdK/",
        image: "images/screenshot-purecss.png?raw=true"
      },
      {
        text: "With any luck this is not another boring old JavaScript calculator. This one has a cool font (if I say so myself) and lets you pick the animation for the button clicks. Enjoy!",
        href: "https://codepen.io/sd3x/full/qmMGqZ/",
        image: "images/screenshot-js-calculator.png?raw=true"
      },
      {
        text: "Finished the Free Code Camp Data Visualization Certification (before the refactor of the site)",
        href: "", // link is bad "https://www.freecodecamp.org/apiepho/data-visualization-certification"
        image: "images/screenshot-fcc-dv-cert.png?raw=true"
      },
      // {
      //   text: "A freeCodeCamp Data Visuallization project to implement a Rouge-like game. Written in React.js. Seemed like a simple project, but was very involved.",
      //   href: "https://codepen.io/sd3x/full/ayQMLb/",
      //   image: "images/screenshot-roguelike.png?raw=true"
      // },
      {
        text: "Finished the Free Code Camp Front Development Certification!! Only complaint is the number of cups of coffee that went cold because I was so focused :)",
        href: "https://www.freecodecamp.com/apiepho/front-end-certification",
        image: "images/screenshot-fcc-fe-cert.png?raw=true"
      },
      {
        text: "This is a game modeled after the original Simon game. See the link at the bottom for the original game instructions.",
        href: "https://codepen.io/sd3x/full/mmobeZ/",
        image: "images/screenshot-simon.png?raw=true"
      },
      {
        text: "A freeCodeCamp project, Tic Tac Toe game with many options. 1 or 2player.",
        href: "https://github.com/alpiepho/project-tic-tac-toe",
        image: "images/screenshot-tic-tac-toe.png?raw=true"
      }
    ];

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
          {data.map((row, index) => <ProjectCard key={index} text={row.text} href={row.href} image={row.image} />)}
        </div>
      </div>
    );
  }
}

export default Projects;
