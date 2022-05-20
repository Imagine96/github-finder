import { GithubApiSearchUserResp, GithubApiRespUsers, GithubApiRespUserDetails } from "./types/githubApiTypes"
import { fetchRepos } from "./fetchRepos"

const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}
export const fetchUsers = async (target?: string): Promise<GithubApiRespUsers[]> => {
    if (target) {
        const resp = await fetch(`${process.env.VITE_APP_GHURL}/search/users?q=${target}`, {
            headers: {
                Authorization: `token ${process.env.VITE_APP_GHT}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            }
        })
        const data = (await resp.json()) as GithubApiSearchUserResp
        return data.items
    } else {
        const resp = await fetch(`${process.env.VITE_APP_GHURL}/users`, {
            headers: {
                Authorization: `token ${process.env.VITE_APP_GHT}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        const data = (await resp.json()) as GithubApiRespUsers[]
        return data
    }
}

export const fetchUserDetails = async (username: string): Promise<{ userDetails: GithubApiRespUserDetails, repos: any[] }> => {
    const resp = await fetch(`${process.env.VITE_APP_GHURL}/users/${username}`, {
        headers: {
            Authorization: `token ${process.env.VITE_APP_GHT}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    const data = (await resp.json()) as GithubApiRespUserDetails

    const repos = await fetchRepos(username)

    return { userDetails: data, repos }
}