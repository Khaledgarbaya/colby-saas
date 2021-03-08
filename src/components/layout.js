import React, {useContext} from 'react'
import {navigate} from 'gatsby'
import {IdentityContext} from '../../identity-context'

const Layout = ({children}) => {
  const {user, netlifyIdentity} = useContext(IdentityContext)
  netlifyIdentity.on('logout', (user) => {
    navigate('/app/login')
  })
  return (
    <div>
      <span>Welcome {user?.user_metadata?.full_name}</span>
      <button
        onClick={() => {
          netlifyIdentity.logout()
        }}
      >
        Logout
      </button>
      {children}
    </div>
  )
}

export default Layout
