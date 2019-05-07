import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <footer className="footer">
        <hr />
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <p className="text-right">
              Page built by&nbsp;
              <a
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/al-piepho-fw-sw-engineer/"
                target="_blank"
              >
                Al Piepho
              </a>{" "}
              <em>&nbsp;&nbsp;(SW | FW | Embedded | Web)&nbsp;&nbsp;2019</em>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
