import React from 'react'

import { database } from '../firebaseConfig'
import { mapObjectToArray } from '../utils'

import NewMessageForm from './NewMessageForm'
import MessagesList from './MessagesList';

const dbMessagesRef = database.ref('/jfddl6-messages')

class Chat extends React.Component {
  state = {
    newMessageText: 'krowa',
    messages: []
  }
  componentDidMount() {
    dbMessagesRef.on(
      'value',
      snapshot => this.setState({
        messages: mapObjectToArray(snapshot.val()).reverse(),
        newMessageText: ''
      })
    )
  }

  onNewMessageTextChangeHandler = (event) =>
    this.setState({ newMessageText: event.target.value })

  componentWillUnmount() {
    dbMessagesRef.off()
  }
  onNewMessageAddClickHandler = () => {
    dbMessagesRef.push({
      text: this.state.newMessageText,
      timestamp: Date.now()
    })
  }

  render() {
    return (
      <div>
        <NewMessageForm
          newMessageText={this.state.newMessageText}
          onNewMessageTextChangeHandler={this.onNewMessageTextChangeHandler}
          onNewMessageAddClickHandler={this.onNewMessageAddClickHandler}
        />

        <MessagesList
          messages={this.state.messages}
        />
      </div>
    )
  }
}
export default Chat