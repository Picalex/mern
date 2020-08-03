import React, {useCallback, useContext, useEffect, useState} from 'react'
import {NavLink,Link} from "react-router-dom";
import {SelectRole} from "./SelectRole";
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/AuthContext";
import {useMessage} from "../hooks/message.hook";

export const UsersList = ({ users }) => {



    if (!users.length) {
        return <p className="center">пользователей пока нет</p>
    }

    return (
        <table className="striped">
            <thead>
            <tr>
                <th>№</th>
                <th>Email</th>
                <th>Name</th>
                <th>Surname</th>
                <th>Roles</th>
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
                        <td>{user.name}</td>
                        <td>{user.surname}</td>
                        <td><SelectRole user={user} /></td>
                        <td><Link to={`/user/info/${user._id}`}><i  id="purple"  className="small material-icons"> account_box</i></Link></td>
                        <td><NavLink to={`/user/edit/${user._id}`}><i  id="purple"  className="small material-icons"> accessible</i></NavLink></td>
                    </tr>
                )
            }) }
            </tbody>
        </table>
    )
}
