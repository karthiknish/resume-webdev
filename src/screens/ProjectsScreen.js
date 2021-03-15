import React, { Component } from "react";
import { Link } from "react-router-dom";
import { generateBG } from "../utils/bgAnim.js";
import { Helmet } from "react-helmet";
import website1 from "../assets/Xd-1-main.PNG";
import website2 from "../assets/Xd-2-main.PNG";
import website3 from "../assets/Xd-3-main.PNG";
import website4 from "../assets/Xd-4-main.PNG";

export default class ContactScreen extends Component {
  componentWillMount() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    var elemProps = generateBG(width, height, false);

    this.setState({
      ...elemProps,
    });

    let resized = false;
    window.addEventListener("resize", () => {
      if (!resized) {
        resized = true;

        if (width !== window.innerWidth || height !== window.innerHeight) {
          var elemProps = generateBG(
            window.innerWidth,
            window.innerHeight,
            true
          );

          this.setState({
            ...elemProps,
          });
        }
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="wrapper no-bg">
          <Helmet>
            <title>projects // karthik nishanth.</title>
            <meta
              name="description"
              content="A creative designer and developer based in London."
            />
          </Helmet>

          <header>
            <Link
              to={{
                pathname: "/",
                state: { ...this.props.location.state, comeThru: true },
              }}
            >
              <h1>karthik nishanth.</h1>
              <span></span>
            </Link>
            <div>
              <span></span>
              <span className="alt"></span>
            </div>
          </header>

          <div
            className={`wrapper ${
              this.props.location.state && this.props.location.state.comeThru
                ? "no-bg"
                : ""
            }`}
            // className="site-cont"
          >
            <h1 style={{ color: "#fff", margin: "10px" }}>Reactjs Projects</h1>
            <div className="meta projectgroup">
              <a
                rel="noopener noreferrer"
                href="https://github.com/karthiknish/youmusic-react"
                target="_blank"
              >
                <img
                  className="projectimg"
                  alt="youmusic"
                  width="100%"
                  height="300px"
                  style={{
                    objectFit: "cover",
                    border: "5px solid #ff3333",
                    borderWidth: "0 10px 10px 0",
                  }}
                  // height="50%"
                  src="https://github.com/karthiknish/youmusic-react/raw/main/images/Capture1.PNG?raw=true"
                />
                <p style={{ textDecoration: "none", color: "white" }}>
                  You Music
                </p>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://github.com/karthiknish/netflix-clone"
                target="_blank"
              >
                <img
                  className="projectimg"
                  alt="Netflix"
                  width="100%"
                  height="300px"
                  style={{
                    objectFit: "cover",
                    border: "5px solid #9ACD32",
                    borderWidth: "0 10px 10px 0",
                  }}
                  // height="50%"
                  src="https://github.com/karthiknish/netflix-clone/raw/master/images/Capture1.PNG?raw=true"
                />
                <p style={{ textDecoration: "none", color: "white" }}>
                  Netflix Clone
                </p>
              </a>
            </div>
            <div className="meta projectgroup">
              <a
                rel="noopener noreferrer"
                href="https://github.com/karthiknish/amazon-clone-react"
                target="_blank"
              >
                <img
                  className="projectimg"
                  alt="amazon"
                  width="100%"
                  height="300px"
                  style={{
                    objectFit: "cover",
                    border: "5px solid 	#00FFFF",
                    borderWidth: "0 10px 10px 0",
                  }}
                  // height="50%"
                  src="https://github.com/karthiknish/amazon-clone-react/raw/main/images/Capture3.PNG?raw=true"
                />
                <p style={{ textDecoration: "none", color: "white" }}>
                  Amazon Clone
                </p>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://github.com/karthiknish/game-directory-react"
                target="_blank"
              >
                <img
                  className="projectimg"
                  alt="Netflix"
                  width="100%"
                  height="300px"
                  style={{
                    objectFit: "cover",
                    border: "5px solid #9932CC",
                    borderWidth: "0 10px 10px 0",
                  }}
                  // height="50%"
                  src="https://github.com/karthiknish/game-directory-react/raw/main/src/img/Capture1.PNG?raw=true"
                />
                <p style={{ textDecoration: "none", color: "white" }}>
                  Gamestore UI
                </p>
              </a>
            </div>
            <h1 style={{ color: "#fff", margin: "10px" }}>Adobe XD Projects</h1>
            <div className="meta projectgroup">
              <Link
                to={{
                  pathname: "projects/xd-1",
                  state: { ...this.props.location.state, comeThru: true },
                }}
              >
                <img
                  className="projectimg"
                  alt="amazondotxd"
                  width="100%"
                  height="300px"
                  style={{
                    objectFit: "cover",
                    border: "5px solid #941414",
                    borderWidth: "0 10px 10px 0",
                  }}
                  // height="50%"
                  src={website1}
                />
                <p style={{ textDecoration: "none", color: "white" }}>
                  Product Design
                </p>
              </Link>
              <Link
                to={{
                  pathname: "projects/xd-2",
                  state: { ...this.props.location.state, comeThru: true },
                }}
              >
                <img
                  className="projectimg"
                  alt="IndonesiaXd"
                  width="100%"
                  height="300px"
                  style={{
                    objectFit: "cover",
                    border: "5px solid #FFA500",
                    borderWidth: "0 10px 10px 0",
                  }}
                  // height="50%"
                  src={website2}
                />
                <p style={{ textDecoration: "none", color: "white" }}>
                  Travel Website
                </p>
              </Link>
            </div>
            <div className="meta projectgroup">
              <Link
                to={{
                  pathname: "projects/xd-3",
                  state: { ...this.props.location.state, comeThru: true },
                }}
              >
                <img
                  className="projectimg"
                  alt="EcommerceXd"
                  width="100%"
                  height="300px"
                  style={{
                    objectFit: "cover",
                    border: "5px solid #808000",
                    borderWidth: "0 10px 10px 0",
                  }}
                  // height="50%"
                  src={website3}
                />
                <p style={{ textDecoration: "none", color: "white" }}>
                  Ecommerce Website
                </p>
              </Link>
              <Link
                to={{
                  pathname: "projects/xd-4",
                  state: { ...this.props.location.state, comeThru: true },
                }}
              >
                <img
                  className="projectimg"
                  alt="FoodXd"
                  width="100%"
                  height="300px"
                  style={{
                    objectFit: "cover",
                    border: "5px solid #ADD8E6",
                    borderWidth: "0 10px 10px 0",
                  }}
                  // height="50%"
                  src={website4}
                />
                <p style={{ textDecoration: "none", color: "white" }}>
                  Food Delivery Website
                </p>
              </Link>
            </div>
          </div>

          <div
            className={"background-overlay anim " + this.state.resize}
            style={{
              gridTemplateColumns: "repeat(" + this.state.gridSizeX + ", 1fr",
            }}
          >
            {[...Array(this.state.gridSizeX * this.state.gridSizeY)].map(
              (e, i) => (
                <span key={i}></span>
              )
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
