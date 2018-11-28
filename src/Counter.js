import React from 'react'

import { database } from './firebaseConfig'

class Counter extends React.Component {
  state = {
    counter: 0
  }

  componentDidMount() {
    database.ref('/counter').on(
      'value',
      snapshot => this.setState({ counter: snapshot.val() })
    )
  }

  inc = () => database.ref('/counter').set(this.state.counter + 1)
  dec = () => database.ref('/counter').set(this.state.counter - 1)

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