import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import {Route, Link} from "react-router-dom";

// Main component
class BasicExample extends React.Component{
  render(){
    return <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />
        <section>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </section>
      </div>
    </Router>
  }
}

// Simple regular boring components
class Home extends React.Component {
    render(){
      return <div>
                <h2>Homeish</h2>
             </div>
    }
}
class About extends React.Component {
    render(){
      return <div>
                <h2>Something to thing about</h2>
             </div>
    }
}

// Nested routes and dynamic rendering
class Topics extends React.Component {
  render(){
    return <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${this.props.match.url}/givenParam`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${this.props.match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${this.props.match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${this.props.match.url}/:topicId`} component={Topic} />
      <Route exact path={this.props.match.url}
        render={
           () => <h3>Please select a topic.</h3>
        }
      />
    </div>
  }
}
class Topic extends React.Component {
    render(){ // show me what U got...
      return <div>
                <h3>{this.props.match.params.topicId}</h3>
             </div>
    }
}


export default BasicExample;
