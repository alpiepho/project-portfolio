import React, { Component } from "react";
import "./App.css";
import Menu from "./Menu.js";
import Home from "./Home.js";
import About from "./About.js";
import WebProjects from "./WebProjects.js";
import EmbeddedProjects from "./EmbeddedProjects.js";
import Podcasts from "./Podcasts.js";
import Contacts from "./Contacts.js";
import Footer from "./Footer.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let webProjects = [ 
      {
        text: "RPN Hex Calculator Chrome Extension (Published to Chrome Store)",
        href: "https://chrome.google.com/webstore/detail/rpn-hex-calculator/koffmhlebmnnlgdlgfkpiglpfgjlkcmc",
        image: "images/screenshot-rpn-hex-chrome.png?raw=true"
      },
      {
        text: "RPN Hex Calculator VS Code Extension (Published to Microsoft Marketplace)",
        href: "https://marketplace.visualstudio.com/items?itemName=thatnamegroup.rpn-hex-calc",
        image: "images/screenshot-rpn-hex-vscode.png?raw=true"
      },
      {
        text: "Started Daily CSS Challenge to create complex graphics with just HTML and CSS. Have completed all 50. So amazing what is possible with just CSS!",
        href: "https://codepen.io/collection/DYpQdK/",
        image: "images/screenshot-purecss.png?raw=true"
      },
      {
        text: "With any luck this is not another boring old JavaScript calculator. This one has a cool font (if I say so myself) and lets you pick the animation for the button clicks. Enjoy!",
        href: "https://codepen.io/sd3x/full/qmMGqZ/",
        image: "images/screenshot-js-calculator.png?raw=true"
      },
      {
        text: "Finished the Free Code Camp Data Visualization Certification (before the refactor of the site)",
        href: "", // link is bad "https://www.freecodecamp.org/apiepho/data-visualization-certification"
        image: "images/screenshot-fcc-dv-cert.png?raw=true"
      },
      // {
      //   text: "A freeCodeCamp Data Visuallization project to implement a Rouge-like game. Written in React.js. Seemed like a simple project, but was very involved.",
      //   href: "https://codepen.io/sd3x/full/ayQMLb/",
      //   image: "images/screenshot-roguelike.png?raw=true"
      // },
      {
        text: "Finished the Free Code Camp Front Development Certification!! Only complaint is the number of cups of coffee that went cold because I was so focused :)",
        href: "https://www.freecodecamp.com/apiepho/front-end-certification",
        image: "images/screenshot-fcc-fe-cert.png?raw=true"
      },
      {
        text: "This is a game modeled after the original Simon game. See the link at the bottom for the original game instructions.",
        href: "https://codepen.io/sd3x/full/mmobeZ/",
        image: "images/screenshot-simon.png?raw=true"
      },
      {
        text: "A freeCodeCamp project, Tic Tac Toe game with many options. 1 or 2player.",
        href: "https://github.com/alpiepho/project-tic-tac-toe",
        image: "images/screenshot-tic-tac-toe.png?raw=true"
      }
    ];
  
    let embeddedProjects = [ 
      {
        text: "Design, implement and debug very time and size limited firmware for several SerDes products used in high data rate serial computer interfaces",
        href: "",
        image: "images/firmware-broadcom-sas-sata-controller.jpg"
      },
      {
        text: "Developed embedded software for internet based digital security cameras including low level components.",
        href: "",
        image: "images/firmware-pelco-sarix_1.jpg"
      },
      {
        text: "Developed FW for several HP digital cameras. ",
        href: "",
        image: "images/firmware-hp-digital-camera.jpg"
      },
      {
        text: "Architect for innovative entertainment center, a home based music center pre-dated the iPod.",
        href: "",
        image: "images/firmware-hp-digital-entertainment.jpg"
      },
    ];

    let podcasts = [ 
      {
        title: "Software Engineering Daily",
        text: "A small podcast that covers a broad range of software related subjects.",
        href: "https://softwareengineeringdaily.com/category/podcast/",
        image: "https://softwareengineeringdaily.com/wp-content/uploads/2015/08/sed_logo_updated.png"
      },
      {
        title: "Cyberwire",
        text: "Cyber sercurity news",
        href: "https://thecyberwire.com/podcasts",
        image: "https://thecyberwire.com/images/navLogo.png"
      },
      {
        title: "Python Bytes",
        text: "\"Python Headlines delivered to your Earbugs\".  (and some decent/bad Dad jokes)",
        href: "https://pythonbytes.fm/",
        image: "https://pythonbytes.fm/static/img/logo.png?cache_id=391cb49247369a67c4be78b27f2b3cd5"
      },
      {
        title: "Talk Python to Me",
        text: "\"A Podcast about Python and Related Topics\"",
        href: "https://talkpython.fm/",
        image: "https://talkpython.fm/static/img/talk_python_logo_mic.png?cache_id=4e8e76b2438a57933fe769bd1fc5f6ef"
      },
      {
        title: ".Net Rocks!",
        text: "A podcast about .Net, C# and current events in the Microsoft dev communities.",
        href: "https://www.dotnetrocks.com/",
        image: "https://lh4.ggpht.com/0JbxRvBX656nsl3O8FCQZ6bnRmo89sFO48KZHB5Jne2MNQVLGgkPr5WsIoepJqpWeYPK=w300-rw"
      },
      {
        title: "Javascript Jabber",
        text: "Podcast specific to Javascript and current events.",
        href: "https://devchat.tv/js-jabber",
        image: "https://devchat.tv/wp-content/uploads/2016/04/js-jabber.png"
      },
      {
        title: "Akimbo",
        text: "A podcast by Seth Godin, random insights on life.",
        href: "https://www.akimbo.me/ ",
        image: "https://res.cloudinary.com/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/v1/1088009/akimbo_bow_blue_sky.001_bywgg9.png"
      },
      {
        title: "Commandline Heros",
        text: "An original podcast about the people who transform technology from the command line up.",
        href: "https://www.redhat.com/en/command-line-heroes",
        image: "images/screenshot-commandline-heros.png?raw=true"
      },
      {
        title: "Intellegence Squared",
        text: "Intelligence Squared U.S. addresses a fundamental problem in America: the extreme polarization of our nation and our politics.",
        href: "https://www.intelligencesquaredus.org/podcasts?gclid=Cj0KCQiAhKviBRCNARIsAAGZ7CeomoQ8Vmn5exl03jzlhBEMGMy9TRPToWF5PdD8tf-8sVIGFDXY1HMaAvpNEALw_wcB",
        image: "https://www.intelligencesquaredus.org/sites/default/files/iq2logo.png"
      },
      {
        title: "Adventures Angular",
        text: "Podcast specific to Angular.js, some JavaScript, and current events.",
        href: "https://devchat.tv/adv-in-angular",
        image: "https://devchat.tv/wp-content/uploads/2016/04/adventures-in-angular.png"
      },
      {
        title: "Shop Talk",
        text: "A podcast about Web front-end development, with lots of about Javascript frameworks.",
        href: "https//shoptalkshow.com/",
        image: "https://shoptalkshow.com/wp-content/themes/shoptalk2/images/shoptalk_logo.png"
      },
      // {
      //   title: "",
      //   text: "",
      //   href: "",
      //   image: ""
      // },
    ];

    return (
      <div className="App">
        <Menu />
        <div className="container-fluid">
          <Home />
          <About />
          <WebProjects 
            title="My Web Projects" 
            text="These are some of the web projects I have worked on. (Click on the image to go to that site.)" 
            data={webProjects} />
           <EmbeddedProjects 
            title="My Embedded Projects" 
            text="These are some of the embedded products I have worked on." 
            data={embeddedProjects} />
          <Podcasts podcasts={podcasts}/>
          <Contacts />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
