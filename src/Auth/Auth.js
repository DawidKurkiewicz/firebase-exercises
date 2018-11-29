import React from 'react'

import Forms from './Forms'




class Auth extends React.Component {

    state = {
        email: '',
        password: ''
    }
    onEmailChangeHandler = event => {
        this.setState({ email: event.target.value })
    }
    onPasswordChangeHandler = event => {
        this.setState({ password: event.target.value })
    }
    onLogInClick = () => {
        alert('bu')
    }
    onLogInByGoogleClick = () => {
        alert('bu')
    }


    render() {
        return (
            <Forms
                email={this.state.email}
                onEmailChangeHandler={this.onEmailChangeHandler}
                password={this.state.password}
                onPasswordChangeHandler={this.onPasswordChangeHandler}
                onLogInClick={this.onLogInClick}
                onLogInByGoogleClick={this.onLogInByGoogleClick}
            />
        )
    }
}
export default Auth