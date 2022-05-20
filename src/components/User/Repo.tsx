import React from 'react'
import { GithubApiUserReposResp } from "../../utils/types/githubApiTypes"
import { FaLink, FaEye, FaStar, FaInfo, FaUtensils } from "react-icons/fa"

interface Props {
    repo: GithubApiUserReposResp
}

const Repo: React.FC<Props> = ({ repo }) => {
    return (
        <div className='mb-2 rounded-md card transition hover:text-gray-50 bg-gray-800 hover:bg-gray-900' >
            <div className="card-body">
                <h3 className="mb-2 text-xl capitalize font-semibold">
                    <a className='flex flex-row w-fit gap-2 items-center' href={repo.html_url} target="_blank" rel='noreferrer' >
                        <FaLink size={24} />
                        {repo.name}
                    </a>
                </h3>
                <p className='mb-2' >
                    {repo.description}
                </p>
                <div className='flex items-center text-center md:text-left flex-col md:flex-row gap-2' >
                    <div className="mr-2 badge badge-info badge-lg p-4 hover:badge-outline cursor-default transition ">
                        <FaEye className='mr-2' size={24} /> {repo.watchers_count}
                    </div>
                    <div className="mr-2 badge badge-success badge-lg p-4 hover:badge-outline cursor-default transition">
                        <FaStar className='mr-2' size={24} /> {repo.stargazers_count}
                    </div>
                    <div className="mr-2 badge badge-error badge-lg p-4 hover:badge-outline cursor-default transition">
                        <FaInfo className='mr-2' size={24} /> {repo.open_issues_count}
                    </div>
                    <div className="mr-2 badge badge-warning badge-lg p-4 hover:badge-outline cursor-default transition">
                        <FaUtensils className='mr-2' size={24} /> {repo.forks_count}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Repo