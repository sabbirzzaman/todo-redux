import { CHANGE_COLOR, CHANGE_STATUS } from "./actions"

export const changeFilterStatus = (value) => {
    return {
        type: CHANGE_STATUS,
        payload: value
    }
}

export const changeFilterColor = (value) => {
    return {
        type: CHANGE_COLOR,
        payload: value
    }
}