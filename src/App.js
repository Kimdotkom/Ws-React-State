import React, { Component } from "react";
import "./App.css";
import Counter from "./Components/Counter";
import Profile from "./Components/Profile";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showCounter: false
    };
  }

  toggle = () => {
    this.setState({ show: !this.state.show });
  };

  toggleCounter = () => {
    this.setState({ showCounter: !this.state.showCounter });
  };

  render() {
    //console.log(this.state.show);
    return (
      <div>
        <button onClick={this.toggleCounter}>{this.state.showCounter? 'Hide Counter' : 'Show Counter'}</button>
        <button onClick={this.toggle}>{this.state.show? 'Hide Profile' : 'Show Profile'}</button>

        {
          this.state.showCounter && <Counter />
        }
        
        { this.state.show &&
          <Profile />
        }
      </div>
    );
  }
}
