import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom"
import './App.css';
import {Questions} from './Questions.js'
import {Odds} from './Odds.js'
import {Home} from './Home.js'
import {Result_page} from './Result_page.js'
import {Switch} from './Switch.js'
import {test_name} from './test_name.js'
import {Turtorial} from './Turtorial.js'
function App() {
  return (
   <Router className="Background">
   <Route path="/" exact component={Turtorial} />
      <Route path="/Home" exact component={Home} />
      <Route path="/question" exact component={Questions} />
      <Route path="/next_question" component={Result_page} />
      <Route path="/odds_page" component={Odds} />
      <Route path="/switch" component={Switch} />
      <Route path="/Name" component={test_name} />
    </Router>
  );
}

export default App;
