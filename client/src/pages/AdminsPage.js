import React, {useCallback, useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {AuthContext} from '../context/AuthContext'
import {Loader} from '../components/Loader'
import {AdminsList} from "../components/AdminsList";

export const AdminsPage = () => {
    const [users, setUsers] = useState([])
    const {loading, request} = useHttp()
    const {token} = useContext(AuthContext)

    const fetchUsers = useCallback(async () => {
        try {
            const fetched = await request('/api/user', 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setUsers(fetched)
        } catch (e) {}
    }, [token, request])

    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])

    if (loading) {
        return <Loader/>
    }

    return (
        <>
            {!loading && <AdminsList users={users} />}
        </>
    )
}
