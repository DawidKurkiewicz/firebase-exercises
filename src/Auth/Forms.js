import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'

const Forms = (props) => (
    <Paper
        style={{
            margin: 20,
            padding: 20
        }}
    >

        <TextField
            name="email"
            type="email"
            floatingLabelText="E-mail"
            value={props.email}
            onChange={props.onEmailChangeHandler}
            fullWidth={true}
        />
        <TextField
            name="password"
            type="password"
            floatingLabelText="Password"
            value={props.password}
            onChange={props.onPasswordChangeHandler}
            fullWidth={true}
        />
        <RaisedButton
            style={{ margin: '5px 0' }}
            label={'Log in'}
            primary={true}
            onClick={props.onLogInClick}
            fullWidth={true}
        />
        <RaisedButton
            style={{ margin: '5px 0' }}
            label={'Log in by Google'}
            primary={true}
            onClick={props.onLogInByGoogleClick}
            fullWidth={true}
        />
    </Paper>
)

export default Forms