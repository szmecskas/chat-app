import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//react-router-dom - a library that allows you to have multi-page app

import { AuthProvider } from "../contexts/AuthContext"
import Chats from "./Chats"
import Login from "./Login"
import Video from "./Video"

/*switch - render one of the routes we see (render the login form or chat component*/
function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
        <AuthProvider>
          <Switch> /*render one of the routes we see*/ 
            <Route path="/chats" component={Chats} />
            <Route path="/chats/video" component={Video} />
            <Route path="/" component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App
