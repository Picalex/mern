import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './routes'
import {useAuth} from './hooks/auth.hook'
import {AuthContext} from './context/AuthContext'
import {Navbar} from './components/Navbar'
import {Loader} from './components/Loader'
import 'materialize-css'
import {RolesState} from "./context/Roles/RolesState";

function App() {
  const {token, login, logout, userId, ready, role} = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated , role)

  if (!ready) {
    return <Loader />
  }

  return (
      <RolesState>
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated ,role
    }}>
      <Router>
        { isAuthenticated && <Navbar /> }
        <div className="container">
          {routes}
        </div>
      </Router>
    </AuthContext.Provider>
      </RolesState>
  )
}

export default App
