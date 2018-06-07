import React from "react";

// importing router components
import { BrowserRouter as Router} from "react-router-dom";
import {Route, Link} from "react-router-dom";

// import custom Components
import Home from "./components/Home"
import About from "./components/About"
import Topics from "./components/Topics"

class Navigation extends React.Component{
  render(){
    return <nav>
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
    </nav>
  }
}

class Header extends React.Component{
  render(){
    return <header>
              <div id="logo" />
              <Navigation />
           </header>

  }
}


// component App
export default class App extends React.Component{
  render(){
    return <Router>
      <div>
        <Header/>

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
