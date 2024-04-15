import React from 'react'

interface Props {
    children: React.ReactNode
}

const AdminLayout = ({ children }: Props) => {
    return (
        <main className='flex'>
            <aside className='p-5 '>Sidebar</aside>
            <div>{children}</div>
        </main>
    )
}

export default AdminLayout