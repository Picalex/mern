import React, {useCallback, useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {AuthContext} from '../context/AuthContext'
import {useHistory} from 'react-router-dom'
import {Loader} from "../components/Loader";
import {RoleList} from "../components/RoleList";
import {useMessage} from "../hooks/message.hook";
import {AddRole} from "../components/AddRole";
import {UsersList} from "../components/UsersList";
import {AddUser} from "../components/AddUser";

export const UserDashBoard = () => {
  const history = useHistory()
  const {loading, request} = useHttp()
  const auth = useContext(AuthContext)
  const message = useMessage()
  const {token} = useContext(AuthContext)
  const [users, setUsers] = useState([])
  const [roles, setRoles] = useState([])



  const fetchRoles = useCallback(async () => {
        try {
            const fetched = await request('/api/role', 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setRoles(fetched)
        } catch (e) {}
        }, [token, request])

  const fetchUsers = useCallback(async () => {
    try {
      const fetched = await request('/api/user', 'GET', null, {
        Authorization: `Bearer ${token}`
      })
      setUsers(fetched)
    } catch (e) {}
  }, [token, request])

    const AddUserHandler = useCallback(async ({...form}) => {
        try {
            const data = await request('/api/user/create', 'POST', {...form},{
                Authorization: `Bearer ${token}`
            })
            message(data.message)
            history.push('/userDash')
        } catch (e) {
            console.log(e)
        }
    }, [token, request, message])


    const RemoveUserHandler = useCallback(async (role) => {
        try {
            const data = await request('/api/role/remove', 'POST', {role},{
                Authorization: `Bearer ${token}`
            })
            message(data.message)
            history.push('/UserDash')
        } catch (e) {
            console.log(e)
        }
    }, [token, request, message])







  useEffect(() => {
    fetchUsers()
    fetchRoles()
  }, [fetchUsers,fetchRoles])




  if (loading) {
    return <Loader/>
  }

  return (
      <>
        <div className="box">
            <div id='box-fon2'>
              <h2>User List</h2>
              {!loading && <UsersList users={users} />}
            </div>
            <div id='box-fon'>
                {!loading && <AddUser users={users} roles={roles} AddUserHandler={AddUserHandler}/>}
            </div>
        </div>
      </>
  )
}
