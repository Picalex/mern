import React from 'react'

export const UsersList = ({ users }) => {
    if (!users.length) {
        return <p className="center">пользователей пока нет</p>
    }

    return (
        <table>
            <thead>
            <tr>
                <th>№</th>
                <th>Email</th>
                <th>Password</th>
                <th>Profile</th>
            </tr>
            </thead>

            <tbody>
            { users.map((user, index) => {
                return (
                    <tr key={user._id}>
                        <td>{index + 1}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td></td>
                    </tr>
                )
            }) }
            </tbody>
        </table>
    )
}
