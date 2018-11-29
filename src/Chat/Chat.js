import React from 'react'

import { database } from '../firebaseConfig'

import NewMessageForm from './NewMessageForm'

const dbMessagesRef = database.ref('/jfddl6-messages')

class Chat extends React.Component {
  state = {
    newMessageText: 'krowa',
    messages: []
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