import React from "react";

export const UserCard = ({ user }) => {
    return (
        <>
            <h5>Профиль</h5>
            <p>Имя: {user.name}</p>
            <p>Фамилия:{user.surname}</p>
        </>

    )
}
