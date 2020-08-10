import React, {useCallback, useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'
import {useHistory, useParams} from "react-router-dom";
import {AuthContext} from '../context/AuthContext'
import {Loader} from '../components/Loader'
import {UserRoleEdit} from "../components/UserRoleEdit";
import {func} from "prop-types";


export const UserEditPage = ({}) => {
    const {token} = useContext(AuthContext)
    const {request, loading} = useHttp()
    const message = useMessage()
    const history = useHistory()
    const UserId = useParams().id
    const [user,setUser]=useState([])
    const [roles,setRoles]=useState([])
    const [form, setForm] = useState(
        {name:'',surname:'',roles:[]}
    )
  const [testForm, setTestForm] = useState(
      {name:'',surname:'',roles:[]}
  )

  const getUser = useCallback(async () => {
    try {

      const fetched = await request(`/api/user/info/${UserId}`, 'GET', null, {
        Authorization: `Bearer ${token}`
      })
        setUser(fetched)
      setForm(fetched)
      setTestForm(fetched)
    } catch (e) {}
  }, [token, UserId, request])


    const fetchRoles = useCallback(async () => {
        try {
            const fetched = await request('/api/role', 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setRoles(fetched)
        } catch (e) {}
    }, [token, request])



    const EditHandler = async () => {
            if (form === testForm)
            return(
                message('пользователь не был изменен'),
                history.push('/userDash')
                  )

      try {
        const data = await request('/api/user/edit', 'POST', {...form},{
          Authorization: `Bearer ${token}`
        })
        message(data.message)
          history.push('/userDash')
      } catch (e) {
      }
    }
    function ChengeRoles(roles) {
        form.roles=roles
    }



    const ChangeHandler = event => {
      setForm({ ...form, [event.target.name]: event.target.value })
    }



  useEffect(() => {
        fetchRoles()
        message()
        getUser()
  }, [ message,getUser,fetchRoles])



  if (loading) {
    return <Loader />
  }

  return (
      <form id='List1' name="form">
          <h6>Имя</h6>
        <p>
          <input
              type="text"
              name="name"
              value={form.name}
              placeholder={form.name}
              onChange={ChangeHandler}
          /></p>
          <h6>Фамилия</h6>
        <p>
          <input
              type="text"
              name="surname"
              value={form.surname}
              placeholder={form.surname}
              onChange={ChangeHandler}
          /></p>
          <p>
            <UserRoleEdit roles={roles} user={user}  ChengeRoles={ChengeRoles} />
          </p>
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
