'use client'
import React from 'react'

interface Props {
    error: Error;
    retry: () => void;
}

const ErrorPage = ({ error, retry }: Props) => {
    console.log('Error ', error)
    return (
        <div className='min-h-[70vh] max-h-screen flex flex-col align-middle justify-center '>
            <div className='alert alert-error flex-col flex w-[70%] sm:w-[60%] self-center '>

                <h1>Oops!</h1>
                <p>An unexpected error has occured</p>
                <button className='btn btn-neutral'>Retry</button>
            </div>
        </div>
    )
}

export default ErrorPage