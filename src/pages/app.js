import React from 'react'
import {Router} from '@reach/router'

const Dashboard = () => <h1>Dashboard</h1>
const Default = () => <h1>Main App</h1>
const App = () => {
  return (
    <Router basepath="/app">
      <Dashboard path="/dasboard" />
      <Default path="/" />
    </Router>
  )
}

export default App
