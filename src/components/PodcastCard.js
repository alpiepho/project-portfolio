import React, { Component } from "react";
import "./PodcastCard.css";

class PodcastCard extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="offset-md-1 col-md-10 picture-grid-item-small">
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
          <span>
            &nbsp; &nbsp; &nbsp;{this.props.title}:&nbsp;{this.props.text}
          </span>
        </p>
      </div>
    );
  }
}

export default PodcastCard;
