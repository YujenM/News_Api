import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default class App extends Component {
  render() {
    let pagesize=15;
    return (
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<News key="general" topics="Top Headlines" pagesize={pagesize} category="general"/>}/>
          <Route exact path="/buisness" element={<News key="business" topics="Buisness" pagesize={pagesize} category="business"/>}/>
          <Route exact path="/science" element={<News key="science" topics="Science" pagesize={pagesize} category="science"/>}/>
          <Route exact path="/health" element={<News key="health" topics="Health" pagesize={pagesize} category="health"/>}/>
          <Route exact path="/sports" element={<News key="sports" topics="Sports" pagesize={pagesize} category="sports"/>}/>
        </Routes> 
      </Router>
    )
  }
}
