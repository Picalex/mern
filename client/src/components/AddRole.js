import React, {useContext, useState} from 'react'
import {useHistory} from "react-router-dom";



export const AddRole = (props) => {

    const history = useHistory()
    const [form, setForm] = useState(
        {name:''}
    )

    const ChangeHandler = event => {
            setForm({ ...form, [event.target.name]: event.target.value })
    }




    return (
        <>
        <form>
            <p><h5 id='roleadd'>Добавление роли</h5>
                <input id='roleinput'
                    type="text"
                    name="name"
                    value={form.name}
                    placeholder=' Введите роль '
                    onChange={ChangeHandler}
                /></p>
        </form>
            <button
                id='button-2'
                onClick={()=>props.AddRoleHandler({...form}) }
            >
                Добавить
            </button>
        </>

    )
}