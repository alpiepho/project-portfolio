import React, { Component } from "react";
import "./About.css";

class About extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div id="about" className="about">
        <div className="row">
          <div className="col-md-6 offset-md-6">
            <h1>About Me</h1>
            <div className="about-description">
              <p>
                I am a problem solver, looking for a position developing
                Software or Firmware that has an impact.
              </p>
              <p>
                With a very strong background in Embedded Systems, I contiunue
                to expand my skills in Python and Web development. I am a true
                self-starter and just love to learn new things.
              </p>
              <br />
              <p>
                <em>
                  "Know something of everything and everything of something."
                </em>{" "}
                - paraphrase of Blaise Pascal
              </p>
              <br />
              <p>
                <em>
                  "code is just a spectrum...same concepts, just different
                  syntax..."
                </em>{" "}
                - Me
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
