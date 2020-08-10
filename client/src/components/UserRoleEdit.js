import React,{useContext, useState} from "react";
import {check} from "express-validator";
import {func} from "prop-types";

export const UserRoleEdit=(props)=> {
    let rolesIds=props.user.roles
    props.roles.select=true
        let [status,setStatus]=useState(false)
        function Test (rolesIds,id) {
            const test = rolesIds.find(role => role === id)
            if (test !== undefined) {

                return true

            } else {
                return false

            }

        }
       function Loli (id) {

           const test = rolesIds.find(role => role === id)

           if (test !== undefined) {
               const array=rolesIds.filter(role => role !== id)
               rolesIds=array
               console.log(`filter ${rolesIds}`)
           } else {

                rolesIds.push(id)
               console.log(`push ${rolesIds}`)
           }

       }




    return (<div id='roleform'>

        {props.roles.map((role)=> {
            return (
                <p key={role._id} id='purple'>
                    <label>
                        <input
                            type="checkbox"
                            name={role._id}

                            value={role.roleName}
                            id={role._id}
                            onChange={(event)=>{
                                let checked =event.target.checked
                                Loli(event.target.name)
                                props.ChengeRoles(rolesIds)
                                console.log(event.target.checked)
                                setStatus(props.roles.map((data)=>{
                                    if(data._id===role._id){
                                        data.select=checked
                                    }
                                    return data
                                }))
                            }}
                            checked={role.select}
                        />
                        <span>{role.roleName}</span>
                    </label>
                </p>
            )
        })}

    </div>)
}
