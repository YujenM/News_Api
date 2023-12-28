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
    let pagesize=5;
    let apikey=process.env.REACT_APP_NEWS_API
    return (
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<News key="general" topics="Top Headlines" apikey={apikey} pagesize={pagesize} category="general"/>}/>
          <Route exact path="/buisness" element={<News key="business" topics="Buisness" apikey={apikey} pagesize={pagesize} category="business"/>}/>
          <Route exact path="/science" element={<News key="science" topics="Science" apikey={apikey} pagesize={pagesize} category="science"/>}/>
          <Route exact path="/health" element={<News key="health" topics="Health" apikey={apikey} pagesize={pagesize} category="health"/>}/>
          <Route exact path="/sports" element={<News key="sports" topics="Sports" apikey={apikey} pagesize={pagesize} category="sports"/>}/>
          <Route exact path="/technology" element={<News key="technology" topics="Technology" apikey={apikey} pagesize={pagesize} category="technology"/>}/>
        </Routes> 
      </Router>
    )
  }
}
