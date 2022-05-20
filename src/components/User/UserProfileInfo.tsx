import React from 'react'
import { FaGithub, FaTwitter } from "react-icons/fa"

interface Props {
    hireable: string,
    avatar_url: string,
    name: string,
    username: string,
    bio: string,
    gUrl: string,
    userType: string,
    location: string,
    blog: string,
    twitter: string
}

const UserProfileInfo: React.FC<Props> = ({
    hireable,
    avatar_url,
    name,
    username,
    bio,
    gUrl,
    userType,
    location,
    blog,
    twitter }) => {
    return (
        <>
            <div className="custom-card-image mb-6 md:mb-0">
                <div className=" text-gray-50 rounded-lg shadow-lg card image-full">
                    <figure>
                        <img src={avatar_url} alt="user profile" />
                    </figure>
                    <div className="z-20 mb-2 flex flex-col ml-4 justify-end">
                        <h2 className='card-title mb-0' >
                            {name}
                        </h2>
                        <p> {username} </p>
                    </div>
                </div>
            </div>
            <div className="col-span-2">
                <div className="mb-6">
                    <h1 className="text-3xl mb-2 card-title flex flex-col items-start">
                        {name}
                        <div className="flex flex-row justify-start -mx-2">
                            <div className="ml-2 mr-1 badge badge-success cursor-default badge-outline"> {userType} </div>
                            {
                                hireable && (
                                    <div className='ml-2 mr-1 badge cursor-default badge-info badge-outline' >
                                        hireable
                                    </div>
                                )
                            }
                        </div>
                    </h1>
                    <p>{bio ? bio : "No bio for this user."}</p>
                    <div className="mt-4 card-action">
                        <a href={gUrl} target="_blank" className='items-center gap-2 btn btn-outline hover:!text-base-300 ' rel="noreferrer" >
                            <FaGithub size={18} /> Profile
                        </a>
                    </div>
                </div>
                <div className="w-full rounded-lg shadow-md flex flex-col md:flex-row items-center bg-base-100 stats">
                    <div className="stat">
                        <div className="stat-title text-sm">
                            Location
                        </div>
                        <div className="stat-value text-base">
                            {location ? location : "Not available"}
                        </div>
                    </div>
                    <div className="stat">
                        <div className="stat-title text-sm">
                            Website
                        </div>
                        <div className="stat-value text-base ">
                            {blog ? <a href={`https://${blog}`} target="_blank" rel="noreferrer" >{blog}</a> : "Not available"}
                        </div>
                    </div>
                    <div className="stat">
                        <div className="stat-title text-sm">
                            <FaTwitter size={24} />
                        </div>
                        <div className="stat-value text-base ">
                            {twitter ? <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noreferrer" >{twitter}</a> : "Not available"}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserProfileInfo