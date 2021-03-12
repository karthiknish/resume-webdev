import React, { Component } from "react";
import { Link } from "react-router-dom";
import { generateBG } from "../utils/bgAnim.js";
import { Helmet } from "react-helmet";
// @ts-ignore
// import { TiHtml5 } from "react-icons/ti";
import {
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaNode,
  FaBootstrap,
} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import {
  SiTailwindcss,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobexd,
  SiAdobedreamweaver,
  SiMysql,
  SiFigma,
} from "react-icons/si";
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
            <title>contact // karthik nishanth.</title>
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

          <div className="contact site-cont">
            <div className="meta">
              <ul>
                <li>
                  <h2>Programming languages</h2>
                  <div className="prog">
                    <div
                      className="proglogo"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <ol
                        style={{
                          margin: "0px",
                          padding: "0px",
                          fontSize: "20px",
                          textAlign: "center",
                          fontWeight: "bold",
                        }}
                      >
                        HTML
                      </ol>
                      <FaHtml5 style={{ fontSize: "60px", color: "#DD4B25" }} />
                    </div>
                    <div
                      className="proglogo"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <ol
                        style={{
                          margin: "0px",
                          padding: "0px",
                          fontSize: "20px",
                          textAlign: "center",
                          fontWeight: "bold",
                        }}
                      >
                        CSS
                      </ol>
                      <FaCss3Alt
                        style={{ fontSize: "60px", color: "#3594CF" }}
                      />
                    </div>
                    <div
                      className="proglogo"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <ol
                        style={{
                          margin: "0px",
                          padding: "0px",
                          fontSize: "20px",
                          textAlign: "center",
                          fontWeight: "bold",
                        }}
                      >
                        React
                      </ol>
                      <FaReact style={{ fontSize: "60px", color: "#5BD3F3" }} />
                    </div>
                    <div
                      className="proglogo"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <ol
                        style={{
                          margin: "0px",
                          padding: "0px",
                          fontSize: "20px",
                          textAlign: "center",
                          fontWeight: "bold",
                        }}
                      >
                        Javascript
                      </ol>
                      <DiJavascript1
                        style={{
                          fontSize: "80px",
                          color: "#EFD81D",
                          marginLeft: "10px",
                          marginTop: "-10px",
                        }}
                      />
                    </div>
                    <div
                      className="proglogo"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <ol
                        style={{
                          margin: "0px",
                          padding: "0px",
                          fontSize: "20px",
                          textAlign: "center",
                          fontWeight: "bold",
                        }}
                      >
                        NodeJs
                      </ol>
                      <FaNode
                        style={{
                          fontSize: "80px",
                          color: "#5B9853",
                          marginLeft: "10px",
                        }}
                      />
                    </div>
                    <div
                      className="proglogo"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <ol
                        style={{
                          margin: "0px",
                          padding: "0px",
                          fontSize: "20px",
                          textAlign: "center",
                          fontWeight: "bold",
                        }}
                      >
                        Bootstrap
                      </ol>
                      <FaBootstrap
                        style={{
                          fontSize: "70px",
                          color: "#700EED",
                          marginLeft: "10px",
                        }}
                      />
                    </div>
                    <div
                      className="proglogo"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginLeft: "10px",
                      }}
                    >
                      <ol
                        style={{
                          margin: "0px",
                          padding: "0px",
                          fontSize: "20px",
                          textAlign: "center",
                          fontWeight: "bold",
                        }}
                      >
                        TailwindCSS
                      </ol>
                      <SiTailwindcss
                        style={{
                          fontSize: "80px",
                          color: "#700EED",
                          marginLeft: "10px",
                        }}
                      />
                    </div>
                    <div
                      className="proglogo"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginLeft: "10px",
                      }}
                    >
                      <ol
                        style={{
                          margin: "0px",
                          padding: "0px",
                          fontSize: "20px",
                          textAlign: "center",
                          fontWeight: "bold",
                        }}
                      >
                        MySql
                      </ol>
                      <SiMysql
                        style={{
                          fontSize: "80px",
                          color: "#005E86",
                          marginLeft: "10px",
                        }}
                      />
                    </div>
                  </div>
                  {/* <img
                    width="70px"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/363px-CSS3_logo_and_wordmark.svg.png"
                  /> */}
                </li>
                <li>
                  <h2>Design Tools</h2>
                  <div className="prog">
                    <div
                      className="proglogo"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginRight: "10px",
                        alignItems: "center",
                      }}
                    >
                      <ol
                        style={{
                          margin: "0px",
                          padding: "0px",
                          fontSize: "20px",
                          textAlign: "center",
                          fontWeight: "bold",
                        }}
                      >
                        Photoshop
                      </ol>
                      <SiAdobephotoshop
                        style={{ fontSize: "60px", color: "#2FA3F7" }}
                      />
                    </div>
                    <div
                      className="proglogo"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginRight: "10px",
                        alignItems: "center",
                      }}
                    >
                      <ol
                        style={{
                          margin: "0px",
                          padding: "0px",
                          fontSize: "20px",
                          textAlign: "center",
                          fontWeight: "bold",
                        }}
                      >
                        Illustrator
                      </ol>
                      <SiAdobeillustrator
                        style={{
                          fontSize: "60px",
                          color: "#F79500",
                        }}
                      />
                    </div>
                    <div
                      className="proglogo"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginRight: "10px",
                        alignItems: "center",
                      }}
                    >
                      <ol
                        style={{
                          margin: "0px",
                          padding: "0px",
                          fontSize: "20px",
                          textAlign: "center",
                          fontWeight: "bold",
                        }}
                      >
                        AdobeXd
                      </ol>
                      <SiAdobexd
                        style={{ fontSize: "60px", color: "#F75EEE" }}
                      />
                    </div>

                    <div
                      className="proglogo"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginRight: "10px",
                      }}
                    >
                      <ol
                        style={{
                          margin: "0px",
                          padding: "0px",
                          fontSize: "20px",
                          textAlign: "center",
                          fontWeight: "bold",
                        }}
                      >
                        DreamWeaver
                      </ol>
                      <SiAdobedreamweaver
                        style={{
                          fontSize: "60px",
                          color: "#5B9853",
                        }}
                      />
                    </div>
                    <div
                      className="proglogo"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <ol
                        style={{
                          marginLeft: "-10px",
                          padding: "0px",
                          fontSize: "20px",
                          textAlign: "center",
                          fontWeight: "bold",
                        }}
                      >
                        Figma
                      </ol>
                      <SiFigma
                        style={{
                          fontSize: "70px",
                          color: "#F76D60",
                        }}
                      />
                    </div>
                  </div>
                </li>
              </ul>
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
