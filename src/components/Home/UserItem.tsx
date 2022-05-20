import React from 'react'
import { Link } from 'react-router-dom'
import { GithubApiRespUsers } from '../../utils/types/githubApiTypes'

interface Props {
    user: GithubApiRespUsers
}

const UserItem: React.FC<Props> = ({ user }) => {
    return (
        <div className='card shadow compact side bg-base-300' >
            <div className="flex-row items-center space-x-4 card-body">
                <div>
                    <div className="avatar">
                        <div className="rounded-full shadow w-14 h-14">
                            <img src={user.avatar_url} alt={`${user.login} avatar image`} />
                        </div>
                    </div>
                </div>
                <div className='w-full flex flex-col' >
                    <h2 className="card-title">
                        {user.login}
                    </h2>
                    <Link className='text-base-content text-opacity-40 text-left' to={`/users/${user.login}`} >
                        Visit Profile
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UserItem