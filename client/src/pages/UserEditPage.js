import React, {useCallback, useContext, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {useHttp} from '../hooks/http.hook'
import {AuthContext} from '../context/AuthContext'
import {Loader} from '../components/Loader'
import {UserEdit} from '../components/UserEdit'



export const UserEditPage = () => {
    const {token} = useContext(AuthContext)
    const {request, loading} = useHttp()
    const [user, setUser] = useState(null)
    const UserId = useParams().id


    const getUser = useCallback(async () => {
        try {

            const fetched = await request(`/api/user/edit/${UserId}`, 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setUser(fetched)
        } catch (e) {}
    }, [token, UserId, request])

    useEffect(() => {
        getUser()
    }, [getUser])

    if (loading) {
        return <Loader />
    }

    return (
        <>
            { !loading && user && <UserEdit user={user} /> }
        </>



    )
}
