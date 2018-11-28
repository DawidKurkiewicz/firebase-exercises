import React from 'react'

import { database } from '../firebaseConfig'

import NewMessageForm from './NewMessageForm'

const dbMessagesRef = database.ref('/jfddl6-messages')

class Chat extends React.Component {
  state = {
    newMessageText: 'krowa',
    messages: []
  }

  componentDidMount() {
    dbMessagesRef.on(
      'value',
      snapshot => {
        const messages = Object.entries(
          snapshot.val()
        ).map(entry => ({
          ...entry[1],
          key: entry[0]
        }))

        this.setState({ messages: messages })
      }
    )
  }

  componentWillUnmount(){
    dbMessagesRef.off()
  }

  onNewMessageTextChangeHandler = event => (
    this.setState({ newMessageText: event.target.value })
  )

  onNewMessageAddClickHandler = () => {
    dbMessagesRef.push({
      text: this.state.newMessageText,
      timestamp: Date.now()
    })
    this.setState({ newMessageText: '' })
  }

  render() {
    return (
      <div>
        <NewMessageForm
          newMessageText={this.state.newMessageText}
          onNewMessageTextChangeHandler={this.onNewMessageTextChangeHandler}
          onNewMessageAddClickHandler={this.onNewMessageAddClickHandler}
        />
        {
          this.state.messages.map(message => (
            <div
              key={message.key}
            >
              {message.text}
            </div>
          ))
        }
      </div>
    )
  }
}
export default Chat