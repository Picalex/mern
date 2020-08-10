import React from "react";
import {SelectRole} from "./SelectRole";
import {Link, NavLink} from "react-router-dom";

export const UserCard = ({ user }) => {
    return (
        <>

            <h5>Профиль</h5>
            <div id='Test'><p>Имя: {user.name}</p></div>
            <div id='Test'><p>Фамилия:{user.surname}</p></div>
            <div id='Test'><p>роли:
            {user.roles.map((roles,index)=>{
                return roles
            })}
            </p></div>


        </>

    )
}
