import React, {useContext, useState} from 'react'
import {useHistory} from "react-router-dom";
import {SelectRole} from "./SelectRole"

export const AddUser = (props) => {

    const history = useHistory()
    const [form, setForm] = useState(
        {email:'',password:''}
    )
    const ChangeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    return (
        <>
        <form>
            <p><h5 id='roleadd'>Добавление пользователя</h5>
                <input id='roleinput'
                    type="text"
                    name="email"
                    value={form.email}
                    placeholder=' Введите email '
                    onChange={ChangeHandler}
                /></p>
            <p><input id='roleinput'
                       type="text"
                       name="password"
                       value={form.password}
                       placeholder=' Введите пароль '
                       onChange={ChangeHandler}
                /></p>

        </form>
            <SelectRole  />
            <button id='button-2' onClick={()=>props.AddUserHandler({...form})}>Добавить</button>
        </>

    )
}