import React, { Component } from 'react'
import './App.css';
import {withRouter, Route, Switch,BrowserRouter as Router} from 'react-router-dom'
import map from "./component/map.js"
import controller from "./component/controller.js"
import information from "./component/information.js"
import bg from "./img/bg.jpg"
class App extends Component {
  render(){
    return (
      <Router>
      <div id="main">
        <div className="container"  id="notmap">
          <div id="title">
            <h1>Divercity project</h1>
          </div>
          <Route path="/" component={information} />
          <Route path="/" component={controller} />
        </div>
        
        <div className="container" id="ismap">
              <Route path="/" component={map} />
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
