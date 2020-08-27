import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/styles.css';
import Home from "./components/Home";
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Route path="/" exact component={Home}/>
      </Router>
    </div>
  );
}

export default App;
