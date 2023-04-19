import React, { Component } from 'react'

export default class Counter extends Component {
    // State Init
    constructor(props) {
        console.log('State init')
        super(props);
        this.state = {count : 0};
    }

    //State Update
    increment = () =>{
        this.setState({count: this.state.count +1})
    }

    decrement = () =>{
        this.setState({count: this.state.count>0 ? this.state.count-1 : this.state.count})
    }

    componentDidMount() {
        console.log('Component did mount')
    }

    componentDidUpdate() {
        console.log('Component did updating')
    }

    componentWillUnmount() {
        console.log('Component Will unmount')
    }

  render() {
    console.log('Component rendring')
    return (
      <div>
        <button onClick={this.increment}>+</button>
        <span>{this.state.count}</span>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}
