import React, { Component } from 'react'
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar/>
      </Router>
    )
  }
}
