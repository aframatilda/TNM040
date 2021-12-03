import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom"
import './App.css';
import{random_name} 
  from'./Functions.jsx'
export let names_ = [];
export let names= "";
export class test_name extends Component{
  constructor() {
    super();
    this.state = {
      name: "",
      names:[ { name: names_[0] },{ name: names_[1] } ]
    };
  }

  handleNameChange = idx => evt => {
    const newnames = this.state.names.map((name, sidx) => {
      if (idx !== sidx) return name;
      return { ...name, name: evt.target.value };
    });
    console.log(names_)
    this.setState({ names: newnames});
  };

  handleSubmit = evt => {
    random_name();
    for (var i = 0; i < this.state.names.length; i++) {
      names_[i] = this.state.names[i].name;
    }

      console.log(names_);
  };

  handleAddName = () => {
    this.setState({
      names: this.state.names.concat([{ name: "" }])
    });
  };

  handleRemoveName = idx => () => {
    this.setState({
      names: this.state.names.filter((s, sidx) => idx !== sidx)
    });
  };

  render() {
    return (
  <div className="container">
   <div className="top-bar">
   <Link to={`/Home`} >
        <button className="back_button" ></button>
    </Link>
    </div>
    <div className="list">
      <link href="https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap" rel="stylesheet">
      </link>
      <h3>Who's playing?</h3>
      <div className="scroll_div">
        {this.state.names.map((name, idx) => (
          <div  key={idx} className="text_field">
            <input
            className="Namefield"
              type="text"
             
              placeholder={`Name...`}
              value={name.name}
              onChange={this.handleNameChange(idx)}
            />
            <button
              type="button"
              onClick={this.handleRemoveName(idx)}
             className="remove_field" 
            >
              x
            </button>
          </div>

        ))}
         </div>
        <button
          type="button"
          onClick={this.handleAddName}
          className="Add_field"
        >
         +
        </button>
    <Link className="odds" to={`/question`} >
      <button className="buttons" onClick={this.handleSubmit}>GO!</button>
          </Link>
          </div>
          </div>
    );
  }
}