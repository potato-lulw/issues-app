import React from 'react'
import UsersTable from './UsersTable'
import Link from 'next/link'

interface Props {
  searchParams: { sortOrder: string}
}

const UsersPage = async ({searchParams: {sortOrder}}: Props) => {
  
  return (
    <div>
      <h1>Users</h1>
      <Link href='/users/new' className='btn-secondary btn'>New User</Link>
      <UsersTable sortOrder={sortOrder}/>
    </div>
  )
}

export default UsersPage