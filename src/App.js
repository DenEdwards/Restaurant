import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/styles.css';
import Home from "./components/Home";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import About from "./components/About";
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
        <Route path="/menu" exact component={Menu}/>
        <Route path="/about" exact component={About}/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
