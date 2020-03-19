import { actions } from './constants'

export const firstAction = (params) => {
    return {
        type: actions.DO_SOMETHING,
        params,
    }
}

