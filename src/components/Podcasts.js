import React, { Component } from "react";
import "./Podcasts.css";

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
          {/* podcasts to add */}
          {/* https://www.akimbo.me/ */}
          {/* https://www.redhat.com/en/command-line-heroes */}
          {/* https://www.intelligencesquaredus.org/podcasts?gclid=Cj0KCQiAhKviBRCNARIsAAGZ7CeomoQ8Vmn5exl03jzlhBEMGMy9TRPToWF5PdD8tf-8sVIGFDXY1HMaAvpNEALw_wcB */}
          {/* https://pythonbytes.fm/ */}
          {/* https://talkpython.fm/ */}
          {/* https://changelog.com/podcast */}
          {/* https://www.indiehackers.com/podcast */}
          {/* https://player.fm/series/the-official-vue-news */}

          {/* codepen-radio */}
          <div className="offset-md-1 col-md-10 picture-grid-item-small">
            <p>
              <a
                rel="noopener noreferrer"
                href="https://blog.codepen.io/radio/"
                target="_blank"
              >
                <img
                  alt="thumbnail"
                  src="https://blog.codepen.io/wp-content/themes/codepen4/images/codepen-logo.svg"
                />
              </a>
              &nbsp; &nbsp; &nbsp;CodePen Radio:&nbsp; About the CodePen
              tool/site and interviews with key developers.
            </p>
          </div>

          {/* dotnet-rocks */}
          <div className="offset-md-1 col-md-10 picture-grid-item-small">
            <p>
              <a
                rel="noopener noreferrer"
                href="https://www.dotnetrocks.com/"
                target="_blank"
              >
                <img
                  alt="thumbnail"
                  src="https://lh4.ggpht.com/0JbxRvBX656nsl3O8FCQZ6bnRmo89sFO48KZHB5Jne2MNQVLGgkPr5WsIoepJqpWeYPK=w300-rw"
                />
              </a>
              &nbsp; &nbsp; &nbsp;.Net Rocks!:&nbsp; A podcast about .Net, C#
              and current events in the Microsoft dev communities.
            </p>
          </div>

          {/* software-engineering-daily */}
          <div className="offset-md-1 col-md-10 picture-grid-item-small">
            <p>
              <a
                rel="noopener noreferrer"
                href="https://softwareengineeringdaily.com/category/podcast/"
                target="_blank"
              >
                <img
                  alt="thumbnail"
                  src="https://softwareengineeringdaily.com/wp-content/uploads/2015/08/sed_logo_updated.png"
                />
              </a>
              &nbsp; &nbsp; &nbsp;Software Engineering Daily:&nbsp; A small
              podcast that covers a broad range of software related subjects.
            </p>
          </div>

          {/* javascript-jabber */}
          <div className="offset-md-1 col-md-10 picture-grid-item-small">
            <p>
              <a
                rel="noopener noreferrer"
                href="https://devchat.tv/js-jabber"
                target="_blank"
              >
                <img
                  alt="thumbnail"
                  src="https://devchat.tv/wp-content/uploads/2016/04/js-jabber.png"
                />
              </a>
              &nbsp; &nbsp; &nbsp;Javascript Jabber:&nbsp; Podcast specific to
              Javascript and current events.
            </p>
          </div>

          {/* adventures-in-angular */}
          <div className="offset-md-1 col-md-10 picture-grid-item-small">
            <p>
              <a
                rel="noopener noreferrer"
                href="https://devchat.tv/adv-in-angular"
                target="_blank"
              >
                <img
                  alt="thumbnail"
                  src="https://devchat.tv/wp-content/uploads/2016/04/adventures-in-angular.png"
                />
              </a>
              &nbsp; &nbsp; &nbsp;Adventures Angular:&nbsp; Podcast specific to
              Angular.js, some JavaScript, and current events.
            </p>
          </div>

          {/* shoptalk */}
          <div className="offset-md-1 col-md-10 picture-grid-item-small">
            <p>
              <a
                rel="noopener noreferrer"
                href="s//shoptalkshow.com/"
                target="_blank"
              >
                <img
                  alt="thumbnail"
                  src="https://shoptalkshow.com/wp-content/themes/shoptalk2/images/shoptalk_logo.png"
                />
              </a>
              &nbsp; &nbsp; &nbsp;Shop Talk:&nbsp; A podcast about Web front-end
              development, with lots of about Javascript frameworks.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Podcasts;
