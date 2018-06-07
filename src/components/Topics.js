import React from "react";

// importing router components
import {Route, Link} from "react-router-dom";

//importing custom components
import Topic from "./Topic"

//importing react-bootstrap
import {Navbar,Nav,NavDropdown,MenuItem,Row,Col,NavItem,Alert} from "react-bootstrap"

// Nested routes and dynamic rendering
class Topics extends React.Component {
  render(){
    return <div>
    <Row>
    <Col className="col-12 col-lg-12 col-xl-3">
        <h2>Topics - something different...</h2>
    </Col>
    </Row>
      <Row>
      <Col className="col-4 col-lg-4 col-xl-3">
      <Navbar>
        <Nav>
        <NavItem >
          <Link to="/">Home</Link>
        </NavItem>
          <NavDropdown eventKey={4} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={4.1}>
              <Link to={`${this.props.match.url}/givenParam`}>Passing string</Link>
            </MenuItem>
            <MenuItem eventKey={4.2}>
              <Link to={`${this.props.match.url}/movie/234/drama`}>another one</Link>
            </MenuItem>
            <MenuItem eventKey={4.3}>
              <Link to={`${this.props.match.url}/props-v-state`}>and again...</Link>
            </MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
      </Col>
      <Col className="col-8 col-lg-8 col-xl-3">
        <Route path={`${this.props.match.url}/:topicId/:id?/:type?`} component={Topic} />
        <Route exact path={this.props.match.url}
          render={
             () => <Alert bsStyle="danger"><h3>Please select a topic.</h3></Alert>
          }
        />
      </Col>
    </Row>
    </div>
  }
}


export default Topics;
