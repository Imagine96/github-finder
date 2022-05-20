import React from 'react'
import { FaUsers, FaUserFriends, FaCode, FaStore } from "react-icons/fa"

interface Props {
    publicRepos: string
    followers: string
    following: string
    gists: string
}

const UserFeed: React.FC<Props> = ({ publicRepos, followers, following, gists }) => {
    return (
        <div className='w-full rounded-lg shadow-md flex flex-col md:flex-row items-center bg-base-100 stats' >
            <div className='stat' >
                <div className="stat-figure text-secondary">
                    <FaUsers className='text-3xl md:text-5xl' />
                </div>
                <div className="stat-title pr-5">
                    Followers
                </div>
                <div className="stat-value pr-5 text-3xl md:text-4xl">
                    {followers}
                </div>
            </div>
            <div className='stat' >
                <div className="stat-figure text-secondary">
                    <FaUserFriends className='text-3xl md:text-5xl' />
                </div>
                <div className="stat-title pr-5">
                    Following
                </div>
                <div className="stat-value pr-5 text-3xl md:text-4xl">
                    {following}
                </div>
            </div>
            <div className='stat' >
                <div className="stat-figure text-secondary">
                    <FaCode className='text-3xl md:text-5xl' />
                </div>
                <div className="stat-title pr-5">
                    Public Repos
                </div>
                <div className="stat-value pr-5 text-3xl md:text-4xl">
                    {publicRepos}
                </div>
            </div>
            <div className='stat' >
                <div className="stat-figure text-secondary">
                    <FaStore className='text-3xl md:text-5xl' />
                </div>
                <div className="stat-title pr-5">
                    Public Gists
                </div>
                <div className="stat-value pr-5 text-3xl md:text-4xl">
                    {gists}
                </div>
            </div>
        </div>
    )
}

export default UserFeed