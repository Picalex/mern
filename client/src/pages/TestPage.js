import React, {useCallback, useContext, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {useHttp} from '../hooks/http.hook'
import {useAuth} from "../hooks/auth.hook";
import {AuthContext} from "../context/AuthContext";
import {RolesContext} from '../context/Roles/RolesContext'



export const TestPage = () => {
    const lif = 23
    const {request, loading} = useHttp()
    const [link, setLink] = useState(null)
    const [mas, setMas] = useState([])
    const linkId = useParams().id
    const {token} = useContext(AuthContext)
    const test = React.useContext(RolesContext)

    let arrObjects = []
    const UserId = '5f21368cbc9f4b288c8f832f'
    const fetchUsers = useCallback(async () => {
        try {
            const fetched = await request('/api/user', 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setMas(fetched)
        } catch (e) {}
    }, [token, request])

    arrObjects[0] = {
        id: "1",
        name: "firstArrElement"
    }
    arrObjects[1] = {
        id: "2",
        name: "secondArrElement"
    }
    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])

    const roles = []
    roles[0] = {
        id: "1",
        name: "first"
    }
    roles[1] = {
        id: "2",
        name: "second"
    }



    const a = roles.map((role) => {
        if (role.name === 'second') {
            return role.name
        }
    })




    function Nameles(array) {
        array.forEach(function (s) {
            console.log(s.name)
        })
    }

    const asss = ['1', '2', '3', '4', '5']


    return (
        <div>
            <h5>TEST</h5>
            <h5>{a}</h5>
            <h5>LOL</h5>
        </div>
    )
}





