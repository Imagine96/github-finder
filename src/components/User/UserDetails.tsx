import React from 'react'
import { GithubApiRespUserDetails, GithubApiUserReposResp } from '../../utils/types/githubApiTypes'
import UserProfileInfo from './UserProfileInfo'
import { Link } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa"
import UserFeed from './UserFeed'
import UserRepos from './UserRepos'

interface Props {
    userDetails: GithubApiRespUserDetails
    repos: GithubApiUserReposResp[]
}

const UserDetails: React.FC<Props> = ({ userDetails, repos }) => {
    return (
        <div className="w-full h-full mx-auto space-y-8 lg:w-11/12">
            <div className="mb-4">
                <Link to="/" className='btn btn-ghost' >
                    <FaArrowLeft size={18} className="mr-2" /> Back to search
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 mb-8 gap-2 md:gap-8" >
                <UserProfileInfo
                    avatar_url={userDetails.avatar_url}
                    bio={userDetails.bio}
                    gUrl={userDetails.html_url}
                    hireable={userDetails.hireable}
                    name={userDetails.name}
                    userType={userDetails.type}
                    username={userDetails.login}
                    location={userDetails.location}
                    blog={userDetails.blog}
                    twitter={userDetails.twitter_username}
                />
            </div>
            <UserFeed
                followers={userDetails.followers}
                following={userDetails.following}
                publicRepos={userDetails.public_repos}
                gists={userDetails.public_gists}
            />
            <UserRepos
                repos={repos}
            />
        </div>
    )
}

export default UserDetails