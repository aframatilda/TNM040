import React, {useState} from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom"
import './App.css';
import{increment,
  chosen_odds_number,
  change_name_number,
  chosen_odds,
  right_odds_number,
  switch_odds_number,
  switch_odds,
 
} from './Functions.jsx'
import Countdown from 'react-countdown-now';





const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return <div className="counter">
    <link href="https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap" rel="stylesheet">
        </link>
        <p>The odds are coming in...</p> 
        <div className="nums"> 

    <span className="in">{seconds}</span> </div> </div>;
  }
};

const Completionist = () =>  
      <div className="container">
        <header>
          <Link to={`/Name`} >
            <button className="back_button" ></button>
          </Link>
        </header>
        <link href="https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap" rel="stylesheet">
        </link>
        <div className="choose_number">
          <h1> 
          The odds are...
          </h1>
        <h1> 
        {right_odds_number}
        </h1>
        <div>
          {set_switch()}
          <Link className="switch_next" to={`/question`} >
            <button className="buttons" onClick={increment}>Next!</button>
          </Link> 
        </div>
        </div>
      </div>
    
export function Result_page(){
    const [showInfo, setShowInfo] = useState(false);
  return (
  <Countdown
    className="Background"
    date={Date.now() + 3000}
    renderer={renderer}
  /> 
  );
};

export function set_switch(name_number){

  switch_odds();
  console.log(switch_odds_number);
  chosen_odds();
if(chosen_odds_number !== right_odds_number && chosen_odds_number !== 0){
  return( 
      <div>
        <h1>
          if you chose: {chosen_odds_number}
        </h1>
        <h1>
        Then press Switch!
        </h1>
        <Link className="switch_next" to={`/switch`} >
          <button className="buttons" onClick={change_name_number}>Switch!</button>
        </Link>
      </div>
      )
  }
else{
  return( 
    <div>
      <h1 id="no_switch">
         Sorry you can't switch this time!
        </h1>
    </div>
   )
}
};
