import React, {useContext} from 'react'
import {Router} from '@reach/router'
import {navigate} from 'gatsby'
import PrivateRoute from '../components/private-route'
import {IdentityContext} from '../../identity-context'
import Layout from '../components/layout'

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}
const Default = () => <h1>Main App</h1>
const Login = () => {
  const {netlifyIdentity} = useContext(IdentityContext)
  netlifyIdentity.on('login', (user) => {
    navigate('/app/dashboard')
  })
  return (
    <div>
      <h1>Login</h1>
      <button
        onClick={() => {
          netlifyIdentity.open()
        }}
      >
        Login
      </button>
    </div>
  )
}
const App = () => {
  return (
    <Layout>
      <Router basepath="/app">
        <PrivateRoute component={Dashboard} path="/dashboard" />
        <Login path="/login" />
        <Default path="/" />
      </Router>
    </Layout>
  )
}

export default App
