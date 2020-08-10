import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {AuthPage} from './pages/AuthPage'
import {UsersPage} from "./pages/UsersPage";
import {UserCardPage} from "./pages/UserCardPage";
import {UserEditPage} from "./pages/UserEditPage";
import {AdminsPage} from "./pages/AdminsPage";
import {RoleDashBoard} from "./pages/RoleDashBoard";
import {UserDashBoard} from "./pages/UserDashBoard"
import {TestPage} from "./pages/TestPage";

export const useRoutes = (isAuthenticated, role) => {
  if (isAuthenticated) {
    return (
      <Switch>
          <Route path="/userDash"  component={UserDashBoard}/>
          <Route path="/TestPage"  component={TestPage}/>
          <Route path="/roleDash"  component={RoleDashBoard}/>
          <Route path="/user/info/:id"  component={UserCardPage}/>
          <Route path="/Adminka"  component={AdminsPage}/>
          <Route path="/user/edit/:id"  component={UserEditPage}/>
          <Route path="/users"  component={UsersPage}/>
                <Redirect to="/TestPage" />
      </Switch>
    )
  }

  return (
    <Switch>
        <Route path="/" exact  component={AuthPage}/>
            <Redirect to="/" />
    </Switch>
  )
}
