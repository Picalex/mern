import React from 'react'
import {NavLink,Link} from "react-router-dom";

export const UsersList = ({ users }) => {
    if (!users.length) {
        return <p className="center">пользователей пока нет</p>
    }

    return (
        <table>
            <thead>
            <tr>
                <th>№</th>
                <th>Email</th>
                <th>Password</th>
                <th>Profile</th>
                <th>Edit Profile</th>
            </tr>
            </thead>

            <tbody>
            { users.map((user, index) => {
                return (
                    <tr key={user._id}>
                        <td>{index + 1}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td><Link to={`/user/info/${user._id}`}><i className="small material-icons"> sentiment_satisfied</i></Link></td>
                        <td><NavLink to={`/user/edit/${user._id}`}><i className="small material-icons"> sentiment_satisfied</i></NavLink></td>

                    </tr>
                )
            }) }
            </tbody>
        </table>
    )
}
