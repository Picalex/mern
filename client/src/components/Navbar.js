import React, {useContext} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'

export const Navbar = () => {
  const history = useHistory()
  const auth = useContext(AuthContext)

  const logoutHandler = event => {
    event.preventDefault()
    auth.logout()
    history.push('/')
  }

  return (
    <nav>
      <div className="nav-wrapper purple darken-1" style={{ padding: '0 2rem' }}>
        <span className="brand-logo">Сайт</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><NavLink to="/Adminka">Админка</NavLink></li>
          <li><NavLink to="/TestPage">Test</NavLink></li>
          <li><NavLink to="/RoleDash">Лист Ролей</NavLink></li>
          <li><NavLink to="/UserDash">Лист пользователей</NavLink></li>
          <li><NavLink to="/create">Создать</NavLink></li>
          <li><NavLink to="/links">Ссылки</NavLink></li>
          <li><NavLink to="/users">Пользователи</NavLink></li>
          <li><a href="/" onClick={logoutHandler}>Выйти</a></li>
        </ul>
      </div>
    </nav>
  )
}
