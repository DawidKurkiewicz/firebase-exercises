import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'

const style = {
  paddingBottom: 10,
  paddingRight: 10,
  paddingLeft: 10,
  position: 'fixed',
  bottom: 0,
  width: '100%',
  zIndex: 9999,

}

const NewMessageForm = (props) => (
  <Paper
    style={style}
  >
    <TextField
      type="text"
      value={props.newMessageText}
      onChange={props.onNewMessageTextChangeHandler}
      fullWidth
    />
    <RaisedButton
      label="Add message!"
      onClick={props.onNewMessageAddClickHandler}
      fullWidth
      primary={true}
    />

  </Paper>
)

export default NewMessageForm