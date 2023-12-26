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
    return (
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<News key="general" topics="Top Headlines" pagesize={15} category="general"/>}/>
          <Route exact path="/buisness" element={<News key="business" topics="Buisness" pagesize={15} category="business"/>}/>
          <Route exact path="/science" element={<News key="science" topics="Science" pagesize={15} category="science"/>}/>
          <Route exact path="/health" element={<News key="health" topics="Health" pagesize={15} category="health"/>}/>
          <Route exact path="/sports" element={<News key="sports" topics="Sports" pagesize={15} category="sports"/>}/>
        </Routes> 
      </Router>
    )
  }
}
