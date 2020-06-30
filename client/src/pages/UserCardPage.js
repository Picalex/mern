import React, {useCallback, useContext, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {useHttp} from '../hooks/http.hook'
import {AuthContext} from '../context/AuthContext'
import {Loader} from '../components/Loader'
import {UserCard} from '../components/UserCard'

export const UserCardPage = () => {
    const {token} = useContext(AuthContext)
    const {request, loading} = useHttp()
    const [User, setUserLink] = useState(null)
    const UserId = useParams().id

    const getUserLink = useCallback(async () => {
        try {
            const fetched = await request(`/api/UserCard/${UserId}`, 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setLink(fetched)
        } catch (e) {}
    }, [token, UserId, request])

    useEffect(() => {
        getUserLink()
    }, [getUserLink])

    if (loading) {
        return <Loader />
    }

    return (
        <>
            { !loading && User && <UserCard link={User} /> }
        </>
    )
}
