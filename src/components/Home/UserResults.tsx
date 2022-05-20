import React from 'react'
import UserItem from "./UserItem"
import { GithubApiRespUsers } from "../../utils/types/githubApiTypes"
import { VscFolderOpened } from "react-icons/vsc"

interface Props {
    users: GithubApiRespUsers[]
}

const NoResults: React.FC = () => {
    return (
        <div className='flex flex-row items-center justify-center gap-8 w-full' >
            <VscFolderOpened size={24} />
            <h2 className='text-lg font-semibold' > Search users from github </h2>
        </div>
    )
}

const UserResults: React.FC<Props> = ({ users }) => {

    return (
        <>
            {
                users.length ? (
                    <div className='grid  grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 text-center ' >
                        {
                            users.map(item => <UserItem key={item.id} user={item} />)
                        }
                    </div>
                ) : <NoResults />
            }
        </>
    )
}

export default UserResults