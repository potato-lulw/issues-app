import React from 'react'

const UserNotFound = () => {
  return (
    <div className=' min-h-[70vh] max-h-screen flex flex-col align-middle justify-center '>
        <div className='alert alert-error'>

        <h1>Oops!</h1>
        <p>This User doesn't exist</p>
        </div>
    </div>
  )
}

export default UserNotFound