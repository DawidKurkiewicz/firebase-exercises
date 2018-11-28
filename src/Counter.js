import React from 'react'

class Counter extends React.Component {
  state = {
    counter: 0
  }

  inc = () => this.setState({ counter: this.state.counter + 1 })
  dec = () => this.setState({ counter: this.state.counter - 1 })

  render() {
    return (
      <div>
        <h1>
          {this.state.counter}
        </h1>
        <button
          onClick={this.inc}
        >
          +
        </button>
        <button
          onClick={this.dec}
        >
          -
        </button>
      </div>
    )
  }
}
export default Counter