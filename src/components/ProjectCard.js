import React, { Component } from "react";
import "./ProjectCard.css";

class ProjectCard extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="col-md-6 picture-grid-item">
        <p>{this.props.text}
        </p>
        <p>
          <a
            rel="noopener noreferrer"
            href={this.props.href}
            target="_blank"
          >
            <img
              alt="thumbnail"
              src={this.props.image}
            />
          </a>
        </p>
      </div>
    );
  }
}

export default ProjectCard;
