import React, {useCallback, useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {AuthContext} from '../context/AuthContext'
import {useHistory} from 'react-router-dom'
import {Loader} from "../components/Loader";
import {UsersList} from "../components/UsersList";
import {RoleList} from "../components/RoleList";

export const CreateRole = () => {
  const history = useHistory()
  const {loading, request} = useHttp()
  const auth = useContext(AuthContext)
  const {token} = useContext(AuthContext)
  const [roles, setRoles] = useState([])

  useEffect(() => {
    window.M.updateTextFields()
  }, [])

  const fetchRoles = useCallback(async () => {
    try {
      const fetched = await request('/api/role', 'GET', null, {
        Authorization: `Bearer ${token}`
      })
    setRoles(fetched)
    } catch (e) {}
  }, [token, request])


  useEffect(() => {
    fetchRoles()
  }, [fetchRoles])


  if (loading) {
    return <Loader/>
  }

  return (
      <>
        {!loading && <RoleList roles={roles} />}
      </>
  )
}
