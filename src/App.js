import React from "react";

// importing router components
import { BrowserRouter as Router} from "react-router-dom";
import {Route,Link} from "react-router-dom"; //Link

// import custom Components
import Home from "./components/Home"
import About from "./components/About"
import Topics from "./components/Topics"
import Calculations from "./components/Calculations"
//importing react-bootstrap
import {Grid,Navbar, Nav,NavItem, Row, Col } from "react-bootstrap";

class Header extends React.Component{
  render(){
    return <Row>
            <Col className="col-12 col-lg-12 col-xl-3">
            <Navbar>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="#home">meet.js - presentation app</a>
                </Navbar.Brand>
              </Navbar.Header>
              <Nav>
                <NavItem >
                  <Link to="/">Home</Link>
                </NavItem>
                <NavItem >
                  <Link to="/about">About</Link>
                </NavItem>
                <NavItem >
                  <Link to="/topics">Topics</Link>
                </NavItem>
                <NavItem >
                  <Link to="/calc">Calculations</Link>
                </NavItem>
              </Nav>
            </Navbar>
          </Col>
          </Row>
  }
}


// component App
export default class App extends React.Component{
  render(){
    return <Router>
      <Grid>
        <Header/>
        <hr />
        <Col className="col-12 col-lg-12 col-xl-3">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
          <Route path="/calc" component={Calculations} />
          </Col>
      </Grid>
    </Router>
  }
}
