import React, {useState} from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom"
import './App.css';
import {chosen_odds_number,right_odd,right_odds_number} from'./Functions.jsx'

export function Odds(){
  const [showInfo, setShowInfo] = useState(false);
return(
    <div className="container">
      <header>
        <Link to={`/Name`} >
          <button className="back_button" ></button>
        </Link> 
 {console.log(chosen_odds_number)} 
  {right_odd()}
  {console.log(right_odds_number)}
      </header>
      <link href="https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap" rel="stylesheet"></link>
      <div className="choose_number">
        <h1>Choose a number between:</h1>
        <h1>1-{chosen_odds_number}</h1>
      </div>
      <Link className="odds" to={`/next_question`}>
        <button className="go_button">GO!</button>
      </Link>
        <div className="button-info" 
        onClick = {() => setShowInfo(true)}> </div>


          {showInfo &&  <div className="transparancy">
          <div className= "infobox">
        <div className="button-infoClose" onClick ={() => setShowInfo(false)}> </div>
        <h2> Rules and gameplay </h2>
        <br></br>

               <h3> Standard or Party mode </h3>
        <p> 
        The modes depend on which occasion you are in. In the party mode, shots and drinks can occur. 
        </p>
        <br></br>

        <h3> Add players </h3>
        <p>
        The player who drew the card picks someone to dare, asking "What are the odds?"
        </p>
        <br></br>

        <h3> Choose odds </h3>
        <p>
        The player gets to choose between three odds intervals after the challenge has been given. The higher interval, the lower the risk gets to fulfill that challenge. With the “Random “- button the game chooses the odds interval between 2-15.
        </p>
        <br></br>

        <h3> SWITCH </h3>
        <p>
       If the sum of the number chosen by the player and the number displayed by the game equals to the highest odds in the interval, hit the switch button! Then the same challenge goes to another player. 
       The new player can´t choose the odds interval, instead the previous odds-interval gets split into half. 
        </p>

      </div>
      </div>}
    </div>
  );
};