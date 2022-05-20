import { GithubApiUserReposResp } from "./types/githubApiTypes"
export const fetchRepos = async (target: string): Promise<GithubApiUserReposResp[]> => {

    const params = new URLSearchParams({
        sort: "updated_at",
        per_page: "10",
    })

    const resp = await fetch(`${process.env.VITE_APP_GHURL}/users/${target}/repos?${params}`)
    const data = (await resp.json()) as GithubApiUserReposResp[]
    return data
}