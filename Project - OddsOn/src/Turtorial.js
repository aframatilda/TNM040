import React, {useState} from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom"
import './App.css';
export function Turtorial(){ 

	const [showInfoFirst, setShowInfoFirst] = useState(true);
	const [showInfoSecond, setShowInfoSecond] = useState(false);
	const [showInfoThird, setShowInfoThird] = useState(false);

const First = event =>{
setShowInfoSecond(true);
setShowInfoFirst(false);
}
const Second_next = event =>{
setShowInfoSecond(false);
setShowInfoThird(true);
}
const Second_back = event =>{
setShowInfoSecond(false);
setShowInfoFirst(true);
}
const Third_back = event =>{
setShowInfoThird(false);
setShowInfoSecond(true);
}
return(
<div >
  <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Josefin+Sans" />
   {showInfoFirst &&  <div><div className="Turtorial">
       	<div className="button-none"></div>
        <div className= "info">
        <div className="Start-Logo"></div>
        <h3 className="Start_text">Welcome to Odds On </h3>
        <p className="Welcome">Gather your friends and take your friendship to the next level! </p>
			</div>
			<button className="button-next" onClick ={First}></button> 
      	</div>
      		<div className="Footer">
			   	<div className="Dots">
      		  	<div className="Selected_Dot"></div>
      		  	<div className="Dot"></div>
      		  	<div className="Dot"></div>
      		  </div>
			
			</div>
			</div>}
	<div>
    {showInfoSecond &&  <div><div className="Turtorial">
    	<div className="button-back" onClick ={Second_back}></div>
    	<div className= "info">
    	  <div className="info-Logo"></div>
        <h3 className="Party_text"> Standard or Party mode </h3>
        <p> 
        Is the party getting boring or do you want to light up the mood on your work break or school lunch- choose between party and standard.
        </p>
        <br></br>

        <h3 className="Party_text"> Switch! </h3>
        <p>
        Switch is good for you, but bad for your friends. 
        With switch the challenge will pass to one of your friends with the chances of doing the odds getting higher - SO WATCH OUT!!
        </p>
        <br></br>
      		
    		</div>
    	<div className="button-next" onClick ={Second_next}></div>
      	</div> <div className="Footer" >
    		   <div className="Dots">
      		  	<div className="Dot"></div>
      		  	<div className="Selected_Dot"></div>
      		  	<div className="Dot"></div>
      		  </div>
    			
    		</div></div>}
	</div>
	<div>
     {showInfoThird && <div> <div className="Turtorial">
     <div  className="button-back" onClick ={Third_back}>
      </div>
        <div className= "info">
          <div className="info-Logo"></div>
        <p className="Info_text">
    If you accept the dare and loose you have to do it!
	If it’s getting bald, running naked around the block or 
	getting in the next airplane – YOU HAVE TO DO IT! Otherwise don’t even bother to play Odds On.
        </p>
      	  <Link className="big-button" to={`/Home`} >
          <button className="Start_app_button" >Start App!</button>
          </Link>
      		</div>
      		  <div  className="button-none">
      </div>
      	</div>
      	      		<div className="Footer">
      		  <div className="Dots">
      		  	<div className="Dot"></div>
      		  	<div className="Dot"></div>
      		  	<div className="Selected_Dot"></div>
      		  </div>
      		</div>
      	</div>}
	</div>
</div>

);
};