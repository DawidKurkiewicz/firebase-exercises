import React from 'react'

import { database } from './firebaseConfig'

class GoogleAssistant extends React.Component {
  state = {
    phrase: 0
  }

  componentDidMount() {
    database.ref('/googleAssistantPhrase').on(
      'value',
      snapshot => this.setState({ phrase: snapshot.val() })
    )
  }

  componentWillUnmount() {
    database.ref('/googleAssistantPhrase').off()
  }

  render(){
    return(
      <div>
        {this.state.phrase}
      </div>
    )
  }
}
export default GoogleAssistant