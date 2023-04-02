
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Newsbar from './components/Newsbar';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Newsbar />
      </div>
    )
  }
}
