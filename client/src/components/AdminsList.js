import React, {useContext} from 'react'
import ReactDOM from 'react-dom'
import {NavLink, Link, useHistory} from "react-router-dom"
import Select from 'react-select'
import {AuthContext} from "../context/AuthContext";
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/message.hook";

export const AdminsList = ({ users }) => {
    const {token} = useContext(AuthContext)
    const {request, loading} = useHttp()
    const message = useMessage()
    const history = useHistory()
    const groupStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    };
    const groupBadgeStyles = {
        backgroundColor: '#EBECF0',
        borderRadius: '2em',
        color: '#172B4D',
        display: 'inline-block',
        fontSize: 12,
        fontWeight: 'normal',
        lineHeight: '1',
        minWidth: 1,
        padding: '0.16666666666667em 0.5em',
        textAlign: 'center',
    };


    const RemoveHandler = async (user) => {

        try {
            const data = await request('/api/user/remove', 'POST', {user},{
                Authorization: `Bearer ${token}`
            })
            message(data.message)
            history.push('/users')
        } catch (e) {
        }
    }
    if (!users.length) {
        return <p className="center">пользователей пока нет</p>
    }
    function RoleUsers(user) {
        if (user.roleUser===true){
            return (<td><i className="small material-icons">radio_button_checked</i></td>)
        } else return (<td><i className="small material-icons">radio_button_unchecked</i></td>)

    }
    function RoleAdmins(user) {
        if (user.roleAdmin===true){
            return (<td><i className="small material-icons">radio_button_checked</i></td>)
        } else return (<td><i className="small material-icons">radio_button_unchecked</i></td>)

    }
    function RoleSuperAdmins(user) {
        if (user.roleSuperAdmin===true){
            return (<td><i className="small material-icons">radio_button_checked</i></td>)
        } else return (<td><i className="small material-icons">radio_button_unchecked</i></td>)

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
                    <td><Link to={`/user/info/${user._id}`}><i className="small material-icons"> account_box</i></Link></td>
                    <td><NavLink to={`/user/edit/${user._id}`}><i className="small material-icons"> edit</i></NavLink></td>
                    {RoleUsers(user)}
                    {RoleAdmins(user)}
                    {RoleSuperAdmins(user)}
                    <td>
                        <button >Удалить</button>
                    </td>
                </tr>
            )
        }) }
        </tbody>
    </table>
    )
}
