import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div id="home" className="home">
        <div className="row">
          <div className="col-md-6">
            <img
              className={["nav-image", "img-rounded"]}
              alt="avatar"
              src={
                "https://avatars1.githubusercontent.com/u/10007673?v=3&s=400"
              }
            />
          </div>
          <div className="col-md-6">
            <h1>Al Piepho</h1>
            <div className="home-sub-title">
              SW | FW | Embedded
              <br />
              Javascript | HTML | CSS
              <br />
              Python | Node | React
              <br />
              C/C++/C#
              <br />
              Selenium | Jenkins
              <br />
              Embedded Systems
              <br />
              Web Development
              <br />
              Northern CO
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
