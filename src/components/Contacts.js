import React, { Component } from "react";
import "./Contacts.css";

class Contacts extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div id="contacts" className="contacts">
        <div className="row">
          <div className="col-md-6 offset-md-6">
            <h1>My Contact Info</h1>
            <div className="contacts-description">
              Please contacts me at one of my accounts. I am usually very
              responsive...if my coffee isn't going cold because I am totally
              sucked into coding :)
            </div>
          </div>

          <div className="col">
            <div className="row contacts-icon">
              <div className="col-md-4 offset-md-2">
                <i className="fa fa-linkedin" aria-hidden="true" />
                &nbsp;&nbsp;
                <a
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/al-piepho-fw-sw-engineer/"
                  target="_blank"
                >
                  Linkedin
                </a>
              </div>
            </div>
            <div className="row contacts-icon">
              <div className="col-md-4 offset-md-2">
                <i className="fa fa-fire" aria-hidden="true" />
                &nbsp;&nbsp;
                <a
                  rel="noopener noreferrer"
                  href="https://www.freecodecamp.com/apiepho"
                  target="_blank"
                >
                  FreeCodeCamp
                </a>
              </div>
            </div>
            <div className="row contacts-icon">
              <div className="col-md-4 offset-md-2">
                <i className="fa fa-codepen" aria-hidden="true" />
                &nbsp;&nbsp;
                <a
                  rel="noopener noreferrer"
                  href="https://codepen.io/sd3x/"
                  target="_blank"
                >
                  CodePen
                </a>
              </div>
            </div>
            <div className="row contacts-icon">
              <div className="col-md-4 offset-md-2">
                <i className="fa fa-github" aria-hidden="true" />
                &nbsp;&nbsp;
                <a
                  rel="noopener noreferrer"
                  href="https://github.com/alpiepho"
                  target="_blank"
                >
                  Github
                </a>
              </div>
            </div>
            <div className="row contacts-icon">
              <div className="col-md-4 offset-md-2">
                <i className="fa fa-file-pdf-o" aria-hidden="true" />
                &nbsp;&nbsp;
                <a download href="ResumeForAlPiepho_public.pdf">
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts;
