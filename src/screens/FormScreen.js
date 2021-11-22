import React, { Component } from "react";
import { Link } from "react-router-dom";
import { generateBG } from "../utils/bgAnim.js";
import { Helmet } from "react-helmet";
import pdf from "../assets/Karthik Nishanth Saravanamuthu Resume.pdf";

export default class FormScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
      // animationEnd:
      //   this.props.location.state.animationEnd !== undefined
      //     ? this.props.location.state.animationEnd
      //     : false,
    };
  }
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
            <title>form // karthik nishanth.</title>
            <meta
              name="description"
              content="A creative designer and developer based in Liverpool."
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
              <div className="intro">
                {/* <p>
                  Hey! I am production graduate who loves learning new tech, and
                  building pretty things — mostly software. I am an individual
                  with great problem-solving and team-working skills. And in my
                  free time, I design and build intuitive user-interfaces and
                  make products that not only help my own workflow, but
                  thousands of other developers. Here are a couple of
                  accomplishments.
                </p> */}
                <h1 style={{ color: "white" }}>Contact</h1>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  <input
                    value={this.state.name}
                    type="text"
                    placeholder="Name"
                  />
                  <input
                    value={this.state.email}
                    type="email"
                    placeholder="Email"
                  />
                  <textarea value={this.state.message} placeholder="Message" />
                </div>
              </div>
              <ul>
                {/* <li>Achieved 86% in the first year of Computer Science BSc</li> */}
                <li>
                  Finalist in Bizzventure,a Annual Pitching Competition for our
                  Buisness Idea 'PABO'-a innovative solution to parking in busy
                  cities.
                </li>
                <li>
                  Interned in Talent Logistics,Egypt - giving them competitive
                  solution to reach out digitally so to improve their boundries
                  to other countries.
                </li>
                <li>
                  Years of experience working with JavaScript (ES6), Python,
                  PHP, HTML, CSS (SASS/SCSS), Node.js, React, GitHub/Git,
                  Firebase, SQL, WordPress, and Adobe XD.
                </li>
                {/* <li>Languages: English, Bengali, Hindi (speaking), Urdu (speaking)</li> */}
              </ul>

              <div class="socials">
                <a target="_blank" href={pdf}>
                  Download CV
                </a>
                <a href="mailto:karthik.nishanth06@gmail.com">Email</a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/karthiknish"
                >
                  GitHub
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/karthik-nishanth/"
                >
                  LinkedIn
                </a>
              </div>
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
