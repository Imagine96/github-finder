import { useState, useEffect } from "react";
import { GithubApiRespUserDetails, GithubApiUserReposResp } from "../types/githubApiTypes";
import { useParams } from "react-router-dom";
import { fetchUserDetails } from "../fetchUsers";

const useUserDetails = (): [GithubApiRespUserDetails | undefined, GithubApiUserReposResp[], boolean] => {
    const [userDetails, setUserDetails] = useState<GithubApiRespUserDetails>()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [repos, setRepos] = useState<GithubApiUserReposResp[]>([])
    const { username } = useParams()

    useEffect(() => {
        if (isLoading && username) {
            fetchUserDetails(username)
                .then(resp => {
                    setUserDetails(resp.userDetails)
                    setRepos(resp.repos)
                    setIsLoading(false)
                })
                .catch(err => {
                    console.log(err)
                    setIsLoading(false)
                })
        }
    }, [])

    return [userDetails, repos, isLoading]
}

export default useUserDetails