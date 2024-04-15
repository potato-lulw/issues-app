import Link from 'next/link'
import React from 'react'

const NavigationBar = () => {
  return (

    <nav className='navbar space-x-7 bg-base-200 w-full'>
    {/* <nav className='flex w-screen p-3 bg-base-300 justify-between px-10'> */}
        <Link href='/'>Logo</Link>
        <Link href='/users'>Users</Link>
    </nav>
 
  )
}

export default NavigationBar