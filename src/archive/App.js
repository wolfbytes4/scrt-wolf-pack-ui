import React, { Component } from "react";
import "./App.css";
import banner from "./assets/banner.jpeg";
import wolf from "./assets/shiller.png";
import secretlogo from "./assets/secret-scrt-logo.png";

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "TraceX Analysis",
      titleSn: "",
      titleConnector: "",
      user: null,
    };
  }

  render() {
    const bannerStyle = {
      backgroundImage: `linear-gradient(rgba(58, 58, 58, 0.1), rgba(58, 58, 58, 1)), url(${banner})`,
      width: "100%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      height: "500px",
    };
    return (
      <div className="root">
        <div style={bannerStyle}>
          <div className="container text-center master-container">
            <div className="row">
              <div className="col">
                <div className="white-circle">
                  <img src={wolf} />
                </div>
              </div>
              <div className="col col-4">
                <div className="container text-center">
                  <div className="row button-row ms-auto">
                    <div className="col header-col">Raffle</div>
                    <div className="col header-col">Rarity</div>
                    <div className="col header-col">Market</div>
                  </div>
                </div>
              </div>

              <div className="col col-2">
                <div className="container text-center">
                  <div className="row button-row">
                    <div className="col connect-col">Connect Wallet</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="card-wrapper">
                  <div className="card raffle-card glow">
                    <div className="top-area">
                      <img src={wolf} className="wolf-img" />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">December Mega Winner </h5>
                      <div className="card-text">
                        <div class="prize-pool-text">
                          Reward Prize pool:
                          <span class="prize-text">
                            300 $sSCRT, 1 winner
                          </span>
                        </div>
                        <div class="info-row">
                          <div class="left-info">
                            <div class="text-label">Winner</div>
                            <div class="text-content">Wolf #69</div>
                          </div>
                          <div class="right-info">
                            <div class="text-label">Status</div>
                            <div class="text-content green">Finished</div>
                          </div>
                        </div>
                      </div>
                      <div className="btn btn-bd-primary raffle-button redeem">
                        <div class="buy-text">Redeem</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card-wrapper">
                  <div className="card raffle-card">
                    <div className="top-area">
                      <img src={secretlogo} />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">December Wolf Den Roulette</h5>
                      <div className="card-text">
                        <div class="prize-pool-text">
                          Prize pool:
                          <span class="prize-text">
                            1000 $sSCRT, 490 winners
                          </span>
                        </div>
                        <div class="info-row">
                          <div class="left-info">
                            <div class="text-label">Tickets Remaining</div>
                            <div class="text-content">20/1000</div>
                          </div>
                          <div class="right-info">
                            <div class="text-label">Price/Ticket</div>
                            <div class="text-content">0.1 $sSCRT</div>
                          </div>
                        </div>
                      </div>
                      <div className="btn btn-bd-primary raffle-button">
                        <div class="buy-text">Buy Ticket</div>
                        <div class="time-text">
                          Ends in 1 Hr 20 mins 50 secs
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card-wrapper">
                  <div className="card raffle-card">
                    <div className="top-area">
                      <img src={secretlogo} />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">January Wolf Den Roulette</h5>
                      <div className="card-text">
                        <div class="prize-pool-text">
                          Prize pool:
                          <span class="prize-text">
                            1000 $sSCRT, 500 winners
                          </span>
                        </div>
                        <div class="info-row">
                          <div class="left-info">
                            <div class="text-label">Tickets Remaining</div>
                            <div class="text-content">0/1000</div>
                          </div>
                          <div class="right-info">
                            <div class="text-label">Price/Ticket</div>
                            <div class="text-content">0.1 $sSCRT</div>
                          </div>
                        </div>
                      </div>
                      <div className="btn btn-bd-primary raffle-button">
                        <div class="buy-text">Redeem</div>
                        <div class="time-text">
                          Starts in 1 Hr 20 mins 50 secs
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
