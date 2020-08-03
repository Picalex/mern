import React, {useCallback, useContext, useEffect, useState} from 'react'

import {Link, NavLink, useHistory} from 'react-router-dom'
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/AuthContext";


export const SelectRole=(props)=> {
    const history = useHistory()
    const [roles, setRoles] = useState([])
    const [name, setName] = useState()
    const {loading, request} = useHttp()
    const {token} = useContext(AuthContext)




    const fetchRoles = useCallback(async () => {
        try {
            const fetched = await request('/api/role', 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setRoles(fetched)

        } catch (e) {}
    }, [token, request])



    function FindName(id,roles) {
        roles.forEach(function (s) {
            if (s._id===id){
              setName(s.roleName)
            }
        })


    }


    const array=props.user.roles

    return(
            <>
                { array.map((item,index) => {
                    return (
                        //{FindName(item,roles)}
                        <p key={index}>{FindName(item,roles)}{name}</p>
                    )
                }) }
            </>

           )



}