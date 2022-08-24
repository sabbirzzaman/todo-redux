import { CHANGE_COLOR, CHANGE_STATUS } from "./actionTypes"

export const changeFilterStatus = (value) => {
    return {
        type: CHANGE_STATUS,
        payload: value
    }
}

export const colorFilter = (value) => {
    return {
        type: CHANGE_COLOR,
        payload: value
    }
}