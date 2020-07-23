import React from "react";

export const UserCard = ({ user }) => {
    function RoleUser(user) {
        if (user.roleUser=== true){
            return (<font color='green' >true</font>)
        } else return (<font color='red' >true</font>)

    }
    function RoleAdmin(user) {
        if (user.roleAdmin=== true){
            return (<font color='green' >true</font>)
        } else return (<font color='red' >true</font>)

    }
    function RoleSuperAdmin(user) {
        if (user.roleSuperAdmin === true){
            return (<font color='green' >true</font>)
        } else return (<font color='red' >true</font>)

    }
    return (
        <>
            <h5>Профиль</h5>
            <p>Имя: {user.name}</p>
            <p>Фамилия:{user.surname}</p>
            <p>роль User: {RoleUser(user)}</p>
            <p>роль Admin: {RoleAdmin(user)}</p>
            <p>роль SuperAdmin: {RoleSuperAdmin(user)}</p>
            <select>
                <option>Grapefruit</option>
                <option>Lime</option>
                <option>Coconut</option>
                <option>Mango</option>
            </select>
        </>

    )
}
