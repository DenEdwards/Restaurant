import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/styles.css';
import Home from "./components/Home";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import {Footer} from "./components/Footer";
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Route path="/" exact component={Home}/>
        <Route path="/contact" exact component={Contact}/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
