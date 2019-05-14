import React, { Component } from "react";
import "./WebProjects.css";
import ProjectCard from "./ProjectCard.js";

class WebProjects extends Component {
  render() {
    return (
      <div id="web-projects" className="portfolio web-portfolio">
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

export default WebProjects;
