import React from 'react';

const NewMessageForm = (props) => (
  <div>
    <input
      type="text"
      value={props.newMessageText}
      onChange={props.onNewMessageTextChangeHandler}
    />
    <button
      onClick={props.onNewMessageAddClickHandler}
    >
      Add message!
    </button>
  </div>
)

export default NewMessageForm