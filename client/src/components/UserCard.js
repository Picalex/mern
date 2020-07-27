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
            <div id='Test'><p>Имя: {user.name}</p></div>
            <div id='Test'><p>Фамилия:{user.surname}</p></div>
        </>

    )
}
