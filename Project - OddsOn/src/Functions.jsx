import './App.css';
import {questions_standard,questions_party} from './questions.jsx';
import {names_} from './test_name.js'
export let questions = "";
export let name_number = 1;

export let diffrent_name_number = 0;

export let questions_number = 0;

export let chosen_odds_number = 0;

export let right_odds_number = 0;


export let switch_odds_number = 0;
export const increment = event => {
  random_name();
questions_number++;

}

export const set_5 = event => {
chosen_odds_number = 5;

}

export const set_10 = event => {
chosen_odds_number = 10;

}

export const set_15 = event => {
chosen_odds_number = 15;

}

export const set_random = event => {
chosen_odds_number = (Math.floor(Math.random() * 13) + 2);
}

export const Standard = event => {
shuffleArray(questions_standard);
questions = questions_standard;
}

export const Party = event => {
shuffleArray(questions_party);
questions = questions_party;
}

export const change_name_number = event =>{
do{
  diffrent_name_number = Math.floor(Math.random() * names_.length);
  console.log("this is the diffrent name number: " + diffrent_name_number);
  console.log("this is the name number: " + name_number);
}
while( diffrent_name_number === name_number)
}

export function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
export function random_name(){

 name_number = (Math.floor(Math.random() * names_.length));



}
export function change_name(){

  name_number = diffrent_name_number;



}
export function chosen_odds(){


chosen_odds_number = chosen_odds_number - right_odds_number;

}
export function right_odd(){


right_odds_number = (Math.floor(Math.random() * chosen_odds_number) + 1)

}
export function switch_odds(){

switch_odds_number = (Math.round(chosen_odds_number/2));


}
export function right_switch_odd(){


chosen_odds_number = switch_odds_number;

}


