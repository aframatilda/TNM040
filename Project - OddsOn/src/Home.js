import React, {useState} from "react";
import { BrowserRouter as Router, Route,Link} from "react-router-dom"
import './App.css';
import {Standard,Party} from'./Functions.jsx'
import './Fonts/TitanOne-Regular.ttf'
import { ReactComponent as Logo } from './Oddson-02.svg';


export function Home() {

const [showInfo, setShowInfo] = useState(false);

  return (


    <div className="container">
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Josefin+Sans" />


      <div className="header"></div>
      <Logo className="Logo"/>

      <div className="flex">
        <Link className="big-button" to={`/Name`} >
          <button className="buttons" onClick={Standard} >Standard!</button>
        </Link>
        <Link className="big-button" to={`/Name`} >
          <button className="buttons" onClick={Party}>Party!</button>
        </Link>
      </div>
      <div >
    
      <div className="button-info" 

        onClick = {() => setShowInfo(true)}><div className="tooltip"><span className="tooltiptext">Click here to learn more!</span></div></div></div>


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
}


