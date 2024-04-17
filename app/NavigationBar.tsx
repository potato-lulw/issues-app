'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const NavigationBar = () => {
    const { status, data: session } = useSession();
    
  return (

     
    
    <nav className='navbar space-x-7 bg-base-200 w-full'>
    {/* <nav className='flex w-screen p-3 bg-base-300 justify-between px-10'> */}
        <Link href='/'>Logo</Link>
        <Link href='/users'>Users</Link>
        <Link href='/products'>Prodcuts</Link>
        {status === 'loading' && <span className="loading loading-dots loading-xs"></span>}
        {status === 'authenticated' && 
        <div className='flex gap-2'>

        <Link href='/'>
          {session.user!.name}
        </Link>
        <Link href='/api/auth/signout'>Logout</Link>
        </div>}
        
        
        {status === 'unauthenticated' && <Link href='/api/auth/signin'>Login</Link>}
        
    </nav>
 
  )
}

export default NavigationBar