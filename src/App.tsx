import React from 'react'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Routes from './routes'
import ComicsProvider from './context/Comics'

const browserHistory = createBrowserHistory()

function App() {
  return (
    <ComicsProvider>
      <Router history={browserHistory}>
        <Routes />
      </Router>
    </ComicsProvider>
  )
}

export default App
