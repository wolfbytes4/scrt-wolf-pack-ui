import React, { Component } from "react";
import "./home.scss";
import { Link } from "react-router-dom";
import wolf from "../../assets/shiller.png";
import twlogo from "../../assets/TwitterLogo.svg";
import blackTwlogo from "../../assets/TwitterLogoDark.svg";
import discordlogo from "../../assets/DiscordLogo.svg";
import stashhlogo from "../../assets/StashhLogo.svg";

class Home extends Component {
  constructor(props) {
    super();
    this.state = {};
  } 

   scrollToComponent() { 
    let id = window.location.hash.replace("#", "");
    let element = document.getElementById(id);

    setTimeout(() => {
      if (element) {
        element.scrollIntoView()
      }
    }, 200); 
   }
  render() {
    return (
      <div id="home-component">
        <div className="container text-center master-container">
          <div className="row">
            <div className="col col-lg-6 col-md-7 col-md-12 project-titles">
              <div className="title">SCRT WOLF PACK</div>
              <div className="sub-title">MINTING SOON</div>
              <a href="#" class="buy-button button3">
                Buy on Stashh
              </a>
            </div>
            <div className="col col-sm-12 col-md-12 col-lg-6">
              <div>
                <img src={wolf} className="right-wolf" />
              </div>
            </div>
          </div>
        </div>

        <div id="about" className="about-section">
          <div className="about-title">ABOUT</div>
          <div className="about-text">
            The Alpha Wolves are lost and the SCRT Wolf Pack is setting off on a
            journey to be reunited.
          </div>
          <div className="about-text">
            Join us today and earn $SHILL for every mission you participate in.
          </div>
        </div>

        <div id="roadmap" className="roadmap-section">
          <div className="roadmap-title">ROADMAP</div>
          <div class="container px-4">
            <div class="row gx-3 gy-3">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <div class="roadmap-block">
                  <div className="block-title">BEGINNING</div>
                  <ul className="block-list">
                    <li>Complete Artwork</li>
                    <li>Launch SCRTWolfPack.com</li>
                    <li>Form the DAO</li>
                  </ul>
                </div>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <div class="roadmap-block">
                  <div className="block-title">THE WOLFDAO</div>
                  <ul className="block-list">
                    <li>
                      WolfPack Holders help decide future projects and
                      initiatives.
                    </li>
                    <li>
                      Discord will be primary means for voting until DAO
                      platform is available.
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <div class="roadmap-block">
                  <div className="block-title">Q1 23</div>
                  <ul className="block-list">
                    <li>Send your Wolves on missions</li>
                    <li>Earn XP and $SHILL for completing missions</li>
                    <li>Form the DAO</li>
                  </ul>
                </div>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <div class="roadmap-block">
                  <div className="block-title">FUTURE</div>
                  <ul className="block-list">
                    <li>
                      While the pack is out searching for the lost Alphas we
                      will be working on a 1/1 collection
                    </li>
                    <li>
                      DAO will help determine the next utility to get added
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="team" className="team-section">
          <div className="team-title">Team</div>
          <div className="team-text">
            Every member of the WolfPack is a valuable member of the team, here
            are a few key members..
          </div>
          <div class="team-row">
            <div>
              <div class="team-block"></div>
              <div className="team-member">
                <div className="left">
                  <div className="name">JAX</div>
                  <div className="position">Founder</div>
                </div>
                <div className="right">
                  <a
                    href="https://twitter.com/nft_scrt"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={twlogo} alt="twlogo" />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div class="team-block"></div>
              <div className="team-member">
                <div className="left">
                  <div className="name">OLARX</div>
                  <div className="position">Community Manager</div>
                </div>
                <div className="right">
                  <a
                    href="https://twitter.com/Olarx2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={twlogo} alt="twlogo" />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div class="team-block"></div>
              <div className="team-member">
                <div className="left">
                  <div className="name">BIGBOSS</div>
                  <div className="position">Community Manager</div>
                </div>
                <div className="right">
                  <a
                    href="https://twitter.com/BilalRMK"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={twlogo} alt="twlogo" />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div class="team-block"></div>
              <div className="team-member">
                <div className="left">
                  <div className="name">CHIEMERIE</div>
                  <div className="position">Community Manager</div>
                </div>
                <div className="right">
                  <a
                    href="https://twitter.com/chimerie2_chi"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={twlogo} alt="twlogo" />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div class="team-block"></div>
              <div className="team-member">
                <div className="left">
                  <div className="name">WOLFBYTES</div>
                  <div className="position">CM/Dev</div>
                </div>
                <div className="right">
                  <a
                    href="https://twitter.com/_wolfbytes"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={twlogo} alt="twlogo" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="final-section">
          <div className="links">
            <div className="link" onClick={this.scrollToComponent}>
              <Link to="/#about">ABOUT</Link>
            </div>
            <div className="link" onClick={this.scrollToComponent}>
              <Link to="/#roadmap">ROADMAP</Link>
            </div>
            <div className="link" onClick={this.scrollToComponent}>
              <Link to="/#team">TEAM</Link>
            </div>
            <div className="link"><Link to="/quests">QUESTS</Link></div>
          </div>
          <div className="bubble-section">
            <div className="logo-bubble">
              <a
                href="https://discord.gg/4WXpQEmcyx"
                target="_blank"
                rel="noreferrer"
              >
                <img src={discordlogo} alt="discordLogo" />
              </a>
            </div>
            <div className="logo-bubble">
              <a
                href="https://twitter.com/scrt_wolfpack"
                target="_blank"
                rel="noreferrer"
              >
                <img src={blackTwlogo} alt="twlogo" />
              </a>
            </div>
            <div className="logo-bubble">
              <a href="https://stashh.io" target="_blank" rel="noreferrer">
                <img src={stashhlogo} alt="stashhLogo" />
              </a>
            </div>
          </div>
          <div className="c-line">(C) SCRTWOLFPACK - ALL RIGHTS RESERVED</div>
        </div>
      </div>
    );
  }
}

export default Home;
