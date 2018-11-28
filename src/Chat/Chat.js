import React from 'react'

class Chat extends React.Component {
  state = {
    newMessageText: 'krowa'
  }

  onNewMessageTextChangeHandler = event => (
    this.setState({ newMessageText: event.target.value })
  )

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.newMessageText}
          onChange={this.onNewMessageTextChangeHandler}
        />
        <button>
          Add message!
        </button>
      </div>
    )
  }
}
export default Chat