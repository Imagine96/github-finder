import React, { createContext } from "react"
import { GithubApiRespUsers } from "../types/githubApiTypes"
import useUser from "../hooks/useUsers"


interface GithubUsersContext {
    users: GithubApiRespUsers[],
    isLoading: boolean,
    searchUsers: (target?: string) => void,
    clearUsers: () => void
}

export const GithubContext = createContext<GithubUsersContext>({
    users: [],
    isLoading: false,
    searchUsers: () => { },
    clearUsers: () => { }
})

const GithubContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [users, isLoading, searchUsers, clearUsers] = useUser()

    return (
        <GithubContext.Provider value={{ users, isLoading, searchUsers, clearUsers }}  >
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContextProvider