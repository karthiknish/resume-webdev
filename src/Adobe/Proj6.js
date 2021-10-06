import React, { Component } from "react";
import { Link } from "react-router-dom";
import { generateBG } from "../utils/bgAnim.js";
import { Helmet } from "react-helmet";
import screen1 from "../assets/Ecomm-1.PNG";
import screen2 from "../assets/Ecomm-2.PNG";
import screen3 from "../assets/Ecomm-3.PNG";
import screen4 from "../assets/Ecomm-4.PNG";
import screen5 from "../assets/Ecomm-5.PNG";
import screen6 from "../assets/Ecomm-6.PNG";
import screen7 from "../assets/Ecomm-7.PNG";
import screen8 from "../assets/Ecomm-8.PNG";

export default class Proj6 extends Component {
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
      <div className="wrapper">
        <Helmet>
          <title>Ecommerce React // karthik nishanth.</title>
        </Helmet>{" "}
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
          <div
            style={{
              backgroundColor: "#191818",
              marginLeft: "50px",
              marginRight: "50px",
            }}
            className="meta projectgroup"
          >
            <div style={{ margin: "30px" }}>
              <h1 style={{ color: "#E6FE0E" }}>
                Ecommerce site with admin capabilities
              </h1>
              <p style={{ color: "white", fontWeight: "200" }}>
                Amazon,Walmart inspired prototype
              </p>
              <div>
                <a
                  rel="noopener noreferrer"
                  href="https://freshie-shopping.herokuapp.com/"
                  target="_blank"
                  className="view"
                >
                  view project
                </a>{" "}
                <a
                  rel="noopener noreferrer"
                  href="https://github.com/karthiknish/Ecommerce"
                  target="_blank"
                  className="view"
                >
                  view github
                </a>
              </div>
              <h3 style={{ color: "#E6FE0E" }}>Screens</h3>

              <p style={{ color: "white", fontWeight: "200" }}>Website</p>
              <img alt="website" src={screen1} width="90%" />
              <img alt="website" src={screen2} width="90%" />
              <img alt="website" src={screen3} width="90%" />
              <img alt="website" src={screen4} width="90%" />
              <h2 style={{ color: "#E6FE0E" }}>Admin features</h2>
              <img alt="website" src={screen5} width="90%" />
              <img alt="website" src={screen6} width="90%" />
              <img alt="website" src={screen7} width="90%" />
              <img alt="website" src={screen8} width="90%" />
            </div>
          </div>
        </div>
        <div
          className={"background-overlay 404 anim " + this.state.resize}
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
    );
  }
}
