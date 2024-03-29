import React, { Component } from "react";
import { Link } from "react-router-dom";
import { generateBG } from "../utils/bgAnim.js";
import { Helmet } from "react-helmet";
import one from "../assets/1.jpg";
import two from "../assets/2.jpg";
import three from "../assets/3.jpg";
import four from "../assets/4.jpg";
import five from "../assets/5.jpg";
import six from "../assets/6.jpg";

class Proj5 extends Component {
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
          <title>Kofluence notification // karthik nishanth.</title>
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
                Kofluence Notification Module
              </h1>
              <p style={{ color: "white", fontWeight: "200" }}>
                Module Assignment
              </p>
              <div>
                <a
                  style={{ marginRight: "20px" }}
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/1ZmAPlsCbfvJ88IYIv910kPlco2sYAFyh/view?usp=sharing"
                  target="_blank"
                  className="view"
                >
                  view ideation
                </a>
                <a
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/13I-XcTDqdzZhooJk-Vps-utoY2BHsZiv/view?usp=sharing"
                  target="_blank"
                  className="view"
                >
                  view full project
                </a>
              </div>
              <h3 style={{ color: "#E6FE0E" }}>Presentation</h3>
              {/* <p style={{ color: "white", fontWeight: "200" }}>Wireframe</p> */}
              <img alt="one" src={one} width="90%" />
              <img alt="two" src={two} width="90%" />
              <img alt="three" src={three} width="90%" />
              <img alt="four" src={four} width="90%" />
              <img alt="five" src={five} width="90%" />
              <img alt="six" src={six} width="90%" />
              <p style={{ color: "white", fontWeight: "200" }}>Video</p>
              <div
                style={{
                  position: "relative",
                  height: 0,
                  overflow: "hidden",
                  maxWidth: "100%",
                  paddingBottom: "56.25%",
                }}
              >
                <iframe
                  src="https://player.vimeo.com/video/533512054"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  title="xd design"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
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
export default Proj5;
