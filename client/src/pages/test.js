import React, {useCallback, useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'
import {useHistory, useParams} from "react-router-dom";
import {AuthContext} from '../context/AuthContext'
import {Loader} from '../components/Loader'


export const AdminkaPage = ({}) => {
    const {token} = useContext(AuthContext)
    const {request, loading} = useHttp()
    const message = useMessage()
    const history = useHistory()
    const UserId = useParams().id
    const [form, setForm] = useState(
        {email:'',name:'',surname:'',role:''}
    )
    const [testForm, setTestForm] = useState(
        {email:'',name:'',surname:'',role:''}
    )

    const getUser = useCallback(async () => {
        try {

            const fetched = await request(`/api/user/info/${UserId}`, 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setForm(fetched)
            setTestForm(fetched)
        } catch (e) {}
    }, [token, UserId, request])



    const EditHandler = async () => {
        if (form === testForm)
            return(
                message('пользователь не был изменен'),
                    history.push('/users')
            )

        try {
            const data = await request('/api/user/admin', 'POST', {...form},{
                Authorization: `Bearer ${token}`
            })
            message(data.message)
            history.push('/users')
        } catch (e) {
        }
    }


    const ChangeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }



    useEffect(() => {
        message()
        getUser()
    }, [ message,getUser])

    useEffect(() => {
        window.M.updateTextFields()
    }, [])


    if (loading) {
        return <Loader />
    }

    return (
        <form name="form">
            <p><h6>почта</h6>
                <input
                    type="text"
                    name="email"
                    value={form.email}
                    placeholder={form.email}
                    onChange={ChangeHandler}
                /></p>
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
            <p><h6>Роль</h6>
                <input
                    type="text"
                    name="role"
                    value={form.role}
                    placeholder={form.role}
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
    )
}
