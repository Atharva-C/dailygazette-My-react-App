
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Newsbar from './components/Newsbar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/"><Newsbar key="general" pagesize={6} country='in' category='general' /></Route>
            <Route exact path="/business"><Newsbar  key="business" pagesize={6} country='in' category='business' /></Route>
            <Route exact path="/entertainment"><Newsbar key="entertainment" pagesize={6} country='in' category='entertainment' /></Route>
            <Route exact path="/health"><Newsbar key="health" pagesize={6} country='in' category='health' /></Route>
            <Route exact path="/science"><Newsbar key="science" pagesize={6} country='in' category='science' /></Route>
            <Route exact path="/sports"><Newsbar key="sports" pagesize={6} country='in' category='sports' /></Route>
            <Route exact path="/technology"><Newsbar key="technology" pagesize={6} country='in' category='technology' /></Route>
          </Switch>
        </div>
      </Router>
    )
  }
}
