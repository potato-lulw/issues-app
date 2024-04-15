import Link from 'next/link';
import React from 'react';
import {sort} from 'fast-sort';
interface User {
    id: number;
    name: string;
    email: string;
    username: string;
}

interface Props {
    sortOrder: string;
}


const UsersTable = async ({sortOrder}: Props) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[] = await res.json();
    const sorted: User[] = sort(users).asc(sortOrder === 'email'? user => user.email : sortOrder === 'name' ? user => user.name : user => user.id)
    
    return (
        <table className='table '>
            <thead>
                <tr>
                   
                    <th><Link href='/users?sortOrder=id'>ID</Link></th>
                    <th><Link href='/users?sortOrder=name'>Name</Link></th>
                    <th><Link href='/users?sortOrder=email'>Email</Link></th>
                    

                </tr>
            </thead>
            <tbody>
                {sorted.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
            </tbody>

        </table>
    )
}

export default UsersTable