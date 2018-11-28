import React from 'react'

class Counter extends React.Component {
  state = {
    counter: 0
  }

  inc = () => {
    this.loadFromFirebase()
      .then(() => {
        this.setState(
          { counter: this.state.counter + 1 },
          this.saveToFirebase
        )
      })
  }

  dec = () => this.setState({ counter: this.state.counter - 1 })

  saveToFirebase = () => (
    fetch(
      'https://ad-snadbox.firebaseio.com/counter.json',
      {
        method: 'PUT',
        body: JSON.stringify(this.state.counter)
      }
    )
  )

  loadFromFirebase = () => (
    fetch('https://ad-snadbox.firebaseio.com/counter.json')
      .then(r => r.json())
      .then(data => {
        if (this.state.counter === data) return
        this.setState({ counter: data })
      })
  )

  componentDidMount() {
    this.loadFromFirebase()
  }

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