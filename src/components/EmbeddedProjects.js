import React, { Component } from "react";
import "./EmbeddedProjects.css";
import ProjectCard from "./ProjectCard.js";

class EmbeddedProjects extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div id="embedded-projects" className="portfolio embedded-portfolio">
        <div className="row">
          <div className="col-md-6">
            <h1>{this.props.title}</h1>
            <p className="portfolio-description">
              {this.props.text}
            </p>
          </div>
        </div>

        <div className="row picture-grid">
          {this.props.data.map((row, index) => <ProjectCard key={index} text={row.text} href={row.href} image={row.image} />)}
        </div>
      </div>
    );
  }
}

export default EmbeddedProjects;
