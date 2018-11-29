import React from 'react'
import Auth from './Auth'
import Chat from './Chat'





const App = (props) => (
  <div>
    <h1>CHAT</h1>
    <Auth>
      <Chat />
    </Auth>
  </div>
)

export default App