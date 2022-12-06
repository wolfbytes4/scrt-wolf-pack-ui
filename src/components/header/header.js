import React, { Component } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import wolf from "../../assets/shiller.png";

class Header extends Component {
  constructor(props) {
    super();
    this.state = {
      address:""
    };
  }
  componentDidMount = async () => {
    await this.getAddress();
  };
  getAddress = async () => {
    const chainID = "secret-4";
    const offlineSigner = window.getOfflineSigner(chainID);
    const accounts = await offlineSigner.getAccounts();
    console.log(accounts);
    this.setState({address:  accounts[0].address})
  };

  scrollToComponent(tag) {
    debugger;
    let id = tag ? tag : window.location.hash.replace("#", "");
    let element = document.getElementById(id);

    setTimeout(() => {
      if (element) {
        element.scrollIntoView();
      }
    }, 200);
  }

  render() {
    const s = this.state;
    return (
      <nav class="navbar navbar-expand-lg">
        <div className="container text-center master-container">
          <div className="navbar-brand white-circle">
            <img src={wolf} />
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <span className="mini-menu">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="/#about"
                    onClick={(e) => this.scrollToComponent("about")}
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                  >
                    ABOUT
                  </a>
                </li>
                <li class="nav-item">
                  <Link
                    to="/#roadmap"
                    onClick={(e) => this.scrollToComponent("roadmap")}
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                  >
                    ROADMAP
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    to="/#team"
                    onClick={(e) => this.scrollToComponent("team")}
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                  >
                    TEAM
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    to="/quests"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                  >
                    QUESTS
                  </Link>
                </li>
              </ul>
            </div>
          </span>
          <div class="collapse navbar-collapse">
            <div className="row nav-row">
              <div className="col col-10">
                <div className="container text-center">
                  <div className="row button-row ms-auto">
                    <div
                      className="col header-col"
                      onClick={(e) => this.scrollToComponent("about")}
                    >
                      <Link to="/#about">ABOUT</Link>
                    </div>
                    <div
                      className="col header-col"
                      onClick={(e) => this.scrollToComponent("roadmap")}
                    >
                      <Link to="/#roadmap">ROADMAP</Link>
                    </div>
                    <div
                      className="col header-col"
                      onClick={(e) => this.scrollToComponent("team")}
                    >
                      <Link to="/#team">TEAM</Link>
                    </div>
                    <div className="col header-col">
                      <Link to="/quests">QUESTS</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col col-2">
                <div className="container text-center">
                  <div className="row button-row">
                    {!s.address && <div onClick={(e) => this.getAddress()} className="col connect-col">Connect Wallet</div>}
                    {s.address && <div className="col connect-col">{s.address.substring(0, 8)+'....'+s.address.substring(s.address.length-8, s.address.length)}</div>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
