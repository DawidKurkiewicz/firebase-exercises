import React from 'react'

import Forms from './Forms'

import { auth, googleProvider } from '../firebaseConfig'
import { FloatingActionButton } from 'material-ui';



class Auth extends React.Component {

    state = {
        email: '',
        password: '',
        isUserLoggedIn: false
    }
    componentDidMount() {
        auth.onAuthStateChanged(
            user => {
                if (user) {
                    this.setState({ isUserLoggedIn: true })
                } else {
                    this.setState({ isUserLoggedIn: false })
                }
            }
        )
    }


    onEmailChangeHandler = event => {
        this.setState({ email: event.target.value })
    }
    onPasswordChangeHandler = event => {
        this.setState({ password: event.target.value })
    }
    onLogInClick = () => {
        auth.signInWithEmailAndPassword(this.state.email, this.state.password)
            .catch(error => {
                alert('something is wrong')
                console.log(error)
            })
    }
    onLogInByGoogleClick = () => {
        auth.signInWithPopup(googleProvider)
    }
    onLogOutClickHandler = () => {
        auth.signOut()
    }

    render() {
        return (
            this.state.isUserLoggedIn ?
                <div>
                    <FloatingActionButton
                        style={{
                            position: 'fixed',
                            top: 10,
                            right: 10,
                            zIndex: 9999,
                            color: 'white'
                        }}
                        secondary={true}
                        onClick={this.onLogOutClickHandler}
                    >
                    X
                    </FloatingActionButton>
                    {this.props.children}
                </div>
                :
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