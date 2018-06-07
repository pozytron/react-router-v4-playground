import React from "react";

 class Topic extends React.Component {
    render(){ // show me what U got...
      console.log(this.props.match.params);
      return <div>
                <h3>{this.props.match.params.topicId}</h3>
                <h4>Optional param id: {this.props.match.params.id}</h4>
                <h4>Optional param type: {this.props.match.params.type}</h4>
             </div>
    }
}

export default Topic;
