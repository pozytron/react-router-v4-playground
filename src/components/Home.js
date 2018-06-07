import React from "react";

//importing react-bootstrap
import {Alert} from "react-bootstrap"


// Simple regular boring components
class Home extends React.Component {
    render(){
      return <div>
              <h2>Home page</h2>
              <Alert bsStyle="success">
              <strong>That's right</strong> We're home man!
             </Alert>
             </div>
    }
}

export default Home;
