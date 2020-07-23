import React, {useCallback, useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {AuthContext} from '../context/AuthContext'
import {useHistory} from 'react-router-dom'
import {Loader} from "../components/Loader";
import {UsersList} from "../components/UsersList";
import {RoleList} from "../components/RoleList";
import {useMessage} from "../hooks/message.hook";
import {AddRole} from "../components/AddRole";

export const RoleDashBoard = () => {
  const history = useHistory()
  const {loading, request} = useHttp()
  const auth = useContext(AuthContext)
  const message = useMessage()
  const {token} = useContext(AuthContext)
  const [roles, setRoles] = useState([])

  const fetchRoles = useCallback(async () => {
    try {
      const fetched = await request('/api/role', 'GET', null, {
        Authorization: `Bearer ${token}`
      })
      setRoles(fetched)
    } catch (e) {}
  }, [token, request])



  const AddRoleHandler = useCallback(async ({...form}) => {
    try {
      const data = await request('/api/role/create', 'POST', {...form},{
        Authorization: `Bearer ${token}`
      })
      message(data.message)
      history.push('/role')
    } catch (e) {
      console.log(e)
    }
  }, [token, request, message])


  const RemoveRoleHandler = useCallback(async (role) => {
    try {
      const data = await request('/api/role/remove', 'POST', {role},{
        Authorization: `Bearer ${token}`
      })
      message(data.message)
      history.push('/role')
    } catch (e) {
      console.log(e)
    }
  }, [token, request, message])


  useEffect(() => {
    fetchRoles()
  }, [fetchRoles])



  if (loading) {
    return <Loader/>
  }

  return (
      <>
        <div className="box">
            <div id='box-fon1'>
              <h2>Role List</h2>
              {!loading && <RoleList roles={roles} RemoveRoleHandler={RemoveRoleHandler}/>}
            </div>
            <div id='box-fon'>
              {!loading && <AddRole  AddRoleHandler={AddRoleHandler} />}
            </div>
        </div>
      </>
  )
}
