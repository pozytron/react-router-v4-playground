import React from "react";

//importing react-bootstrap
import {Alert} from "react-bootstrap";


class About extends React.Component {
    render(){
      return <div>
              <h2>About page</h2>
             <Alert bsStyle="warning">
                <strong>What about me?!</strong> Best check yo self, you're not looking too               good.
             </Alert>
             </div>
    }
}



export default About;
