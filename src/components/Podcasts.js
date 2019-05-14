import React, { Component } from "react";
import "./Podcasts.css";
import PodcastCard from "./PodcastCard.js";

class Podcasts extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {

    return (
      <div id="podcasts" className="podcasts">
        <div className="row">
          <div className="col-md-6">
            <h1>Podcasts To Follow</h1>
            <div className="podcasts-description">
              <p>
                I regularly listen to a number of useful Software and Web
                Developer podcasts:
              </p>
            </div>
          </div>
        </div>

        <div className="row picture-grid-small">
          {this.props.podcasts.map((row, index) => <PodcastCard key={index} title={row.title} text={row.text} href={row.href} image={row.image} />)}
       </div>
      </div>
    );
  }
}

export default Podcasts;
