import { GithubApiUserReposResp } from "./types/githubApiTypes"

const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}
export const fetchRepos = async (target: string): Promise<GithubApiUserReposResp[]> => {

    const params = new URLSearchParams({
        sort: "updated_at",
        per_page: "10",
    })

    const resp = await fetch(`${process.env.VITE_APP_GHURL}/users/${target}/repos?${params}`, { headers })
    const data = (await resp.json()) as GithubApiUserReposResp[]
    return data
}