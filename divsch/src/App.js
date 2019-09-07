import React, { Component } from 'react'
import './App.css';
import {withRouter, Route, Switch,BrowserRouter as Router} from 'react-router-dom'
import map from "./component/map.js"
import controller from "./component/controller.js"
import information from "./component/information.js"

class App extends Component {
  render(){
    return (
      <Router>
      <div id="main">
          <h1>Divercity project</h1>
          <Route path="/" component={map} />
          <Route path="/" component={controller} />
          <Route path="/" component={information} />
      </div>
      </Router>
    );
  }
}

export default App;
