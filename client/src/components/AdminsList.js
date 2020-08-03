import React, {useContext} from 'react'
import ReactDOM from 'react-dom'
import {NavLink, Link, useHistory} from "react-router-dom"
import Select from 'react-select'
import {AuthContext} from "../context/AuthContext";
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/message.hook";
import {useAuth} from "../hooks/auth.hook";

export const AdminsList = ({ users }) => {
    const {token} = useContext(AuthContext)
    const {request, loading} = useHttp()
    const message = useMessage()
    const history = useHistory()



    const RemoveHandler = async (user) => {

        try {
            const data = await request('/api/user/remove', 'POST', {user},{
                Authorization: `Bearer ${token}`
            })
            message(data.message)
        } catch (e) {
        }
    }
    if (!users.length) {
        return <p className="center">пользователей пока нет</p>
    }





    return (


   <table>
        <thead>
        <tr>
            <th>Number</th>
            <th>Email</th>
            <th>Profile</th>
            <th>Edit Profile</th>
            <th>User</th>
            <th>Admin</th>
            <th>SuperAdmin</th>
            <th>Roles</th>

        </tr>
        </thead>

        <tbody>
        { users.map((user, index) => {
            return (
                <tr key={user._id}>
                    <td>{index + 1}</td>
                    <td>{user.email}</td>
                    <td><Link to={`/user/info/${user._id}`}><i  id="purple"  className="small material-icons"> account_box</i></Link></td>
                    <td><NavLink to={`/user/edit/${user._id}`}><i  id="purple"  className="small material-icons"> edit</i></NavLink></td>
                    <td><li><NavLink to="/role">роли</NavLink></li></td>
                    <td>
                        <button onClick={RemoveHandler(user)}>delete</button>
                    </td>
                </tr>
            )
        }) }
        </tbody>
    </table>
    )
}
