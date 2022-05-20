import React, { useContext } from 'react'
import { GithubContext } from '../../utils/context/GithubContext'
import UserResults from '../Home/UserResults'
import Search from '../Home/Search'
import { SpinnerDotted } from "spinners-react"

const Home: React.FC = () => {

    const { users, isLoading, searchUsers, clearUsers } = useContext(GithubContext)
    console.log(users)
    return (
        <div className='flex flex-col items-center justify-start gap-4'>
            <Search isLoading={isLoading} searchUsers={searchUsers} clearUsers={clearUsers} users={users.length ? true : false} />
            {
                isLoading ? <SpinnerDotted className='mx-auto' size="200" color="rgba(249, 250, 251)" /> : <UserResults users={users} />
            }
        </div>
    )
}

export default Home