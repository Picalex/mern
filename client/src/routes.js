import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {LinksPage} from './pages/LinksPage'
import {CreatePage} from './pages/CreatePage'
import {DetailPage} from './pages/DetailPage'
import {AuthPage} from './pages/AuthPage'
import {UsersPage} from "./pages/UsersPage";
import {UserCardPage} from "./pages/UserCardPage";
import {UserEditPage} from "./pages/UserEditPage";
import {AdminsPage} from "./pages/AdminsPage";


export const useRoutes = (isAuthenticated, role) => {
  if (isAuthenticated) {
    return (
      <Switch>
          <Route path="/user/info/:id">
              <UserCardPage />
          </Route>
          <Route path="/adminka">
              <AdminsPage />
          </Route>
          <Route path="/user/edit/:id">
                  <UserEditPage />
          </Route>
        <Route path="/links" exact>
          <LinksPage />
        </Route>
        <Route path="/create" exact>
          <CreatePage />
        </Route>
        <Route path="/detail/:id">
          <DetailPage />
        </Route>
          <Route path="/users">
              <UsersPage />
          </Route>
        <Redirect to="/create" />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}
