import React, {useState} from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom"
import './App.css';
import{questions,
  set_5,
  set_10,
  set_15,
  set_random,
  names_go,
  questions_number, name_number,random_name} 
  from'./Functions.jsx'
  import{names_} from'./test_name.js'

export function Questions(){
  const [showInfo, setShowInfo] = useState(false);

  if(questions_number < questions.length-1){
  return (
    <div  className="container" >
   <div className="top-bar">
   <Link to={`/Name`} >
        <button className="back_button" ></button>
    </Link>
    </div>
    <link href="https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap" rel="stylesheet"></link>
      <div className="question">
      <h3 className="name">{names_[name_number]}</h3>What are the odds you {questions[questions_number]}
      </div>
        <div className="odds">
          <Link className="odds" to={`/odds_page`} >
            <button className="odds_button" onClick={set_5}>1-5</button>
            <button className="odds_button" onClick={set_10}>1-10</button>
            <button className="odds_button" onClick={set_15}>1-15</button>
            <button className="odds_button" onClick={set_random}>Random</button>
          </Link>
        </div>
              <element className="button-info" 
        onClick = {() => setShowInfo(true)}> </element>


          {showInfo &&  <div className="transparancy">
      <div className= "infobox">
        <element className="button-infoClose" onClick ={() => setShowInfo(false)}> </element>
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
}
    else{
      return(
 
<div className="Background">
   <div className="top-bar">
   <Link to={`/`} >
        <button className="back_button" ></button>
    </Link>
    </div>
  <link href="https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap" rel="stylesheet"></link>
  <h1>Sorry there are no more questions</h1>
  </div>

  );
 };
};