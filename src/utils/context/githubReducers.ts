import { GHActionType, GHContextState, GHActionsTypesEnum, GHContextSEARCHPayload } from "../types/githubContextTypes"
export const githubReducer = (state: GHContextState, action: GHActionType): GHContextState => {
    const { type, payload } = action

    switch (type) {
        case GHActionsTypesEnum.SEARCH: {
            return {
                isLoading: false,
                users: (payload as GHContextSEARCHPayload).resp,
            }
        }
        case GHActionsTypesEnum.SETLOADINGSTATE: {
            return { ...state, isLoading: payload }

        }
        default: {
            return state
        }
    }
}