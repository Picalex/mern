import React from "react";

export const UserEdit = ({ user }) => {
    return (
        <>
            <h2>Профиль</h2>
            <p>Имя: {user.name}</p>
            <p>Фамилия:{user.surname}</p>
        </>

    )
}
