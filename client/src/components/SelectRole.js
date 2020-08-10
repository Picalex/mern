import React, {useCallback, useContext, useEffect, useState} from 'react'



export const SelectRole=(props)=> {
    const name=[]
    if(!props.roles.length){
        console.log('нет ролей')
    }







    function FindName(id,roles,name) {
        roles.forEach((s)=> {
            if (s._id===id){
               name.push(s.roleName)
            }
        })

        return name
    }

    const array=props.user.roles
    return(
            <>
                { array.map((item,index) => {

                    const test=FindName(item,props.roles,name)

                     return(
                         <p key={index}>{test[index]}</p>
                         )
                }) }
            </>

           )



}