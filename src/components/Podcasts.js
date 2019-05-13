import React, { Component } from "react";
import "./Podcasts.css";
import PodcastCard from "./PodcastCard.js";

class Podcasts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let data = [ 
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
          {data.map((row, index) => <PodcastCard key={index} title={row.title} text={row.text} href={row.href} image={row.image} />)}
       </div>
      </div>
    );
  }
}

export default Podcasts;
