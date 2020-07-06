import React, {useContext, useState} from "react";
import {useHttp} from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'
import {useHistory} from 'react-router-dom'
import {AuthContext} from "../context/AuthContext";



export const UserEdit = ({ user }) => {
    const {loading, request} = useHttp()
    const message = useMessage()
    const {token} = useContext(AuthContext)
    const history = useHistory()
    const [form, setForm] = useState(
        {_id:user._id,name:user.name || 'имя',surname:user.surname || 'фамилия'}
    )
    const EditHandler = async () => {
        try {
            console.log({...form})
            const data = await request('/api/user/edit', 'POST', {...form},{
                Authorization: `Bearer ${token}`
            })
            message(data.message)
            history.push('/users')
        } catch (e) {
            console.log(e)
        }
    }
    const ChangeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }
    return (
        <>
        <form name="form">
            <p><h6>Имя</h6>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    placeholder={form.name}
                    onChange={ChangeHandler}
                /></p>
            <p><h6>Фамилия</h6>
                <input
                    type="text"
                    name="surname"
                    value={form.surname}
                    placeholder={form.surname}
                    onChange={ChangeHandler}
                /></p>
            <button
                className="btn grey lighten-1 black-text"
                onClick={EditHandler}
                //disabled={}
            >
                Изменить
            </button>
        </form>
            </>
    )


}
