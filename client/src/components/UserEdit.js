import React from "react";


const EditHandler = async () => {
    try {
        const data = await request('/api/auth/register', 'POST', {...myform})
        message(data.message)
    } catch (e) {}
}

export const UserEdit = ({ user }) => {
    return (
        <form name="myForm">
            <p><h6>Имя</h6><input type="text" name="nameInput" placeholder={user.name} /></p>
            <p><h6>Фамилия</h6><input type="text" name="surnameInput" placeholder={user.surname} /></p>
            <button
                className="btn grey lighten-1 black-text"
                onClick={EditHandler}
                //disabled={}
            >
                Изменить
            </button>
        </form>

    )
}
