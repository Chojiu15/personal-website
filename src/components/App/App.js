/*Import */
import React from "react";
import classes from "./App.module.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Showcase from "../Showcase/Showcase";
import About from "../About/About";
import Work from "../Work/Work";
import More from "../More/More";
import Contact from "../Contact/Contact";
import ScrollContext from "../Context/Scroll";
import AllWork from "../AllWork/AllWork";
import No from "../No/No";
import Nav from "../Nav/Nav";
import SingleWork from "../SingleWork/SingleWork";

/*App*/
const App = () => {
  return (
    <ScrollContext>
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route exact path="/home">
              <Showcase />
              <About />
              <Work />
              <More />
              <Contact />
            </Route>
            <Route exact path="/allwork">
              <Nav />
              <AllWork />
            </Route>
            <Route exact path="/allwork/:id">
              <Nav />
              <SingleWork />
            </Route>
            <Route exact path="/about">
              <Nav />
              <About />
            </Route>
            <Route exact path="/contact">
              <Nav />
              <Contact />
            </Route>
            <Route exact path="/Nav">
              <Nav />
            </Route>
            <Route exact path="/*">
              <No />
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
    </ScrollContext>
  );
};
export default App;
