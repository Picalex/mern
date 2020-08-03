import {createContext} from 'react'

function noop() {}

export const RolesContext = createContext({
    roleId: null,
    roleName: null,
})
