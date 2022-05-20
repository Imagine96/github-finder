import React from 'react'
import { GithubApiUserReposResp } from '../../utils/types/githubApiTypes'
import Repo from "./Repo"

interface Props {
    repos: GithubApiUserReposResp[]
}

const UserRepos: React.FC<Props> = ({ repos }) => {
    return (
        <div className='card rounded-lg shadow-lg bg-base-100' >
            <div className="card-body">
                <h2 className="text-3xl my-4 font-bold-card-title">
                    Latest Repositories
                </h2>
                {
                    repos.map(repo => <Repo key={repo.id} repo={repo} />)
                }
            </div>
        </div>
    )
}

export default UserRepos