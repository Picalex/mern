import React from 'react'
import {NavLink,Link} from "react-router-dom";

export const AdminsList = ({ users }) => {
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
                <th>Role</th>
                <th>RoleChange</th>
            </tr>
            </thead>

            <tbody>
            { users.map((user, index) => {
                return (
                    <tr key={user._id}>
                        <td>{index + 1}</td>
                        <td>{user.email}</td>
                        <td><Link to={`/user/info/${user._id}`}><i className="small material-icons"> account_box</i></Link></td>
                        <td><NavLink to={`/user/edit/${user._id}`}><i className="small material-icons"> accessible</i></NavLink></td>
                        <td>{user.role}</td>
                        <td>
                            <form name="myForm">
                                <input type="radio" name="roleblock" checked={user.role} value="User" /><span>User</span>
                                <input type="radio" name="roleblock" value="Admin" /><span>Admin</span>
                            </form>
                            <div id="testBlock"></div>
                        </td>
                    </tr>
                )
            }) }
            </tbody>
        </table>
    )
}
