import React from "react";

// importing router components
import {Route, Link} from "react-router-dom";

//importing custom components
import Operation from "./Operation"

//importing react-bootstrap
import {Navbar,Nav,NavDropdown,MenuItem,Row,Col,Alert} from "react-bootstrap"

// Nested routes and dynamic rendering
class Calculations extends React.Component {
  render(){
    return <div>
    <Row>
    <Col className="col-12 col-lg-12 col-xl-3">
        <h2>What can we do? </h2>
    </Col>
    </Row>
      <Row>
      <Col className="col-3 col-lg-3 col-xl-3">
      <Navbar>
        <Nav>
          <NavDropdown eventKey={4} title="Calculate sth" >
            <MenuItem eventKey={4.1}>
              <Link to={`${this.props.match.url}/multiply/8`}>multiply</Link>
            </MenuItem>
            <MenuItem eventKey={4.2}>
              <Link to={`${this.props.match.url}/add/8`}>add</Link>
            </MenuItem>
            <MenuItem eventKey={4.3}>
              <Link to={`${this.props.match.url}/sqrt/4`}>sqrt</Link>
            </MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
      </Col>
      <Col className="col-9 col-lg-9 col-xl-3">
        <Route path={`${this.props.match.url}/:operation/:number`} component={Operation} />
        <Route exact path={this.props.match.url}
          render={
             () => <Alert bsStyle="danger"><h3>Select Operation</h3></Alert>
          }
        />
      </Col>
    </Row>
    </div>
  }
}


export default Calculations;
