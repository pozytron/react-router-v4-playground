import React from "react";

import {Label} from "react-bootstrap"
 class Operation extends React.Component {
    render(){
      // show me what U got...
      // console.log(this.props.match.params)
      let result = 0;
      let calcBy = 2;
      switch (this.props.match.params.operation) {
        case "multiply":
          result = parseInt(this.props.match.params.number,10) * calcBy;
        break;
        case "add":
        result = parseInt(this.props.match.params.number,10) + calcBy;

        break;
        case "sqrt":
        result = Math.sqrt(parseInt(this.props.match.params.number,10));
        break;
        default:
      }

      return <div>
                <h3>
                <Label>{this.props.match.params.number}</Label>
                {this.props.match.params.operation}
                <Label>{calcBy}</Label>
                =
                <Label>{result}</Label></h3>
             </div>
    }
}

export default Operation;
