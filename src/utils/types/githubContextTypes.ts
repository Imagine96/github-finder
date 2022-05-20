import { GithubApiRespUsers, GithubApiSearchUserResp, } from "./githubApiTypes"

export type GHActionType = GHSearchAction | GHSetLoadStateAction

export interface GHSearchAction {
    payload: GHContextSEARCHPayload,
    type: GHActionsTypesEnum.SEARCH
}

export interface GHSetLoadStateAction {
    payload: boolean,
    type: GHActionsTypesEnum.SETLOADINGSTATE,
}

export enum GHActionsTypesEnum { SEARCH, SETLOADINGSTATE }

export interface GHContextState {
    users: GithubApiRespUsers[],
    isLoading: boolean,
}

export interface GHContextSEARCHPayload {
    resp: GithubApiRespUsers[]
}

