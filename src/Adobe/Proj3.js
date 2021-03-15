import React, { Component } from "react";
import { Link } from "react-router-dom";
import { generateBG } from "../utils/bgAnim.js";
import { Helmet } from "react-helmet";
import website1 from "../assets/Xd-3-main.PNG";
import website2 from "../assets/Xd-3-main-1.PNG";
import website3 from "../assets/Xd-3-main-2.PNG";

export default class Proj3 extends Component {
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
          <title>Xd-1 // karthik nishanth.</title>
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
                Responsive Ecommerce Page Prototype
              </h1>
              <p style={{ color: "white", fontWeight: "200" }}>
                Excommerce website with appropriate devicewise designs
              </p>
              <div>
                <a
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/1XOuMnz4CdqLcQ9A3QCXvLB7AXdT8Vu2K/view?usp=sharing"
                  target="_blank"
                  className="view"
                >
                  view project
                </a>
              </div>
              <h3 style={{ color: "#E6FE0E" }}>Screens</h3>

              <p style={{ color: "white", fontWeight: "200" }}>Website</p>
              <img alt="website1" src={website1} width="90%" />
              <img alt="website2" src={website2} width="90%" />
              <img alt="website3" src={website3} width="90%" />
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
