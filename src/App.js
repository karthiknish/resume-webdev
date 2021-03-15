import React, { Component } from "react";
import "./styles/app.scss";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "./screens/HomeScreen.js";
import Projects from "./screens/ProjectsScreen.js";
// import Project from "./screens/ProjectScreen.js";
import Contact from "./screens/ContactScreen.js";
import FourOhFour from "./screens/404Screen.js";
import AboutMe from "./screens/AboutMe.js";
import SkillsScreen from "./screens/SkillsScreen";
import Proj1 from "./Adobe/Proj1";
import Proj2 from "./Adobe/Proj2";
import Proj3 from "./Adobe/Proj3";
import Proj4 from "./Adobe/Proj4";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projects/xd-1" component={Proj1} />
          <Route exact path="/projects/xd-2" component={Proj2} />
          <Route exact path="/projects/xd-3" component={Proj3} />
          <Route exact path="/projects/xd-4" component={Proj4} />
          {/* <Route path="/projects/:project" component={Project}/> */}
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={AboutMe} />
          <Route path="/skills" component={SkillsScreen} />
          <Route component={FourOhFour} />
        </Switch>
      </BrowserRouter>
    );
  }
}
