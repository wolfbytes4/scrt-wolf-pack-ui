import React, { Component } from "react";
import "./quest.scss";
import banner from "../../../assets/banner.jpeg";
import wolf from "../../../assets/wolf.png";
class Quest extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    const bgStyle = {
      backgroundImage: `linear-gradient(rgba(58, 58, 58, 0.1), rgba(58, 58, 58, 1)), url(${banner})`,
      width: "100%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      height: "100%",
      borderRadius: "15px 15px 0 0",
    };
    return (
      <div id="quest-component">
        <div className="coming-soon">
          <span>Coming soon</span>
        </div>
        <div className="quest">
          <div className="header-area" style={bgStyle}>
            <div>
              <div className="title">The lost Alphas</div>
              <div className="sub-title">
                <span>
                  Lore: The scrt wolf pack have been scattered all throughout
                  the land. No one knows where the pack Alphas have gone so
                  temporarily brave wolves must step up to gather the packs
                </span>
              </div>
              <div className="time-left">
                <div className="time-block">
                  <div className="qty">3</div>
                  <div className="time-label">Days</div>
                </div>
                <div className="time-block">
                  <div className="qty">5</div>
                  <div className="time-label">Hours</div>
                </div>
                <div className="time-block">
                  <div className="qty">22</div>
                  <div className="time-label">Mins</div>
                </div>
                <div className="time-block">
                  <div className="qty">50</div>
                  <div className="time-label">Secs</div>
                </div>
              </div>
            </div>
            <div className="quest-info">
              <div>10 Wolves on the quest</div>
              <div>Lvl 1 Solo Quest</div>
              <div>Duration 5 days</div>
            </div>
          </div>
          <div className="body-area">
            <div className="info-row">
              <div>
                <div className="labels">Quest Rewards</div>
                <div className="values">100XP</div>
                <div className="values">1 - 300 $SHILL</div>
              </div>
              <div className="requirements-area">
                <div className="labels">Requirements</div>
                <div className="values">Any Wolf</div>
              </div>
            </div>
            <div class="wolf-select-area">
              <div className="labels">Available for Mission(Choose 1)</div>
              <div>
                <img class="wolf" src={wolf}></img>
              </div>
            </div>

            <a href="#" class="mission-button button-border">
              Start mission
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Quest;
