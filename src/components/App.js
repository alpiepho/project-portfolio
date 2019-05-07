import React, { Component } from "react";
import "./App.css";
import Menu from "./Menu.js";
import Home from "./Home.js";
import About from "./About.js";
import Projects from "./Projects.js";
import Podcasts from "./Podcasts.js";
import Contacts from "./Contacts.js";
import Footer from "./Footer.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Menu />
        <div className="container-fluid">
          <Home />
          <About />
          <Projects />
          <Podcasts />
          <Contacts />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
