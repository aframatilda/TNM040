import React from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom"
import './App.css';
import{diffrent_name_number,
  questions,
  questions_number,
  right_odds_number,
  right_odd, 
  change_name,
  switch_odds_number,
  right_switch_odd,
      } 
from './Functions.jsx'
import{names_} from './test_name.js'

export function Switch(){
right_switch_odd();
right_odd();
console.log(diffrent_name_number);
change_name();
return(
  <div className="Background">
    <header>
      <Link to={`/Name`} >
        <button className="back_button" ></button>
      </Link>
    </header>
    <link href="https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap" rel="stylesheet"></link>
    <div className="question">
      <h3>{names_[diffrent_name_number]}</h3>What are the odds {questions[questions_number]}
    </div>
    <div className="choose_number_odds">
      <h1>Choose a number between:</h1>
      <h1>1-{switch_odds_number}</h1>
    </div>
    <Link className="odds" to={`/next_question`} >
      <button className="Bigger_buttons" >GO!</button>
    </Link>
  </div>
  );
};