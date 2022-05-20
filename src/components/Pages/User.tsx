import React from 'react'
import { SpinnerDotted } from "spinners-react"
import UserDetails from '../User/UserDetails'
import useUserDetails from '../../utils/hooks/useUserDetails'

const User: React.FC = () => {

    const [userDetails, repos, isLoading] = useUserDetails()

    return (
        <div className='flex flex-col h-full items-center justify-center gap-4 p-4' >
            {
                isLoading ? <SpinnerDotted className='mx-auto' size="200" color="rgba(249, 250, 251)" /> : userDetails ? <UserDetails repos={repos} userDetails={userDetails} /> : null
            }
        </div>
    )
}

export default User