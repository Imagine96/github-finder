import { useEffect, useCallback, useReducer } from "react";
import { GithubApiRespUsers } from "../types/githubApiTypes";
import { GHContextState, GHActionType, GHActionsTypesEnum } from "../types/githubContextTypes";
import { githubReducer } from "../context/githubReducers";
import { fetchUsers } from "../fetchUsers";

const useUsers = (): [GithubApiRespUsers[], boolean, (target?: string) => void, () => void] => {

    const [state, dispatch] = useReducer<(state: GHContextState, action: GHActionType) => GHContextState>(githubReducer, {
        users: [],
        isLoading: false
    })

    const { users, isLoading } = state

    const searchUsers = useCallback((target?: string) => {
        dispatch({ type: GHActionsTypesEnum.SETLOADINGSTATE, payload: true })
        fetchUsers(target)
            .then(resp => {
                dispatch({
                    type: GHActionsTypesEnum.SEARCH,
                    payload: {
                        resp
                    }
                })
            })
            .catch(err => {
                console.log(err)
                dispatch({
                    type: GHActionsTypesEnum.SETLOADINGSTATE,
                    payload: false
                })
            })
    }, [])

    const clearUsers = useCallback(() => {
        dispatch({
            type: GHActionsTypesEnum.SEARCH,
            payload: {
                resp: []
            }
        })
    }, [])

    return [users, isLoading, searchUsers, clearUsers]
}

export default useUsers