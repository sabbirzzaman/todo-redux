import {
    ADDED,
    COMPLETE,
    COLOR_SELECT,
    DELETE,
    COMPLETE_ALL,
    CLEAR_COMPLETED,
} from './actionTypes';

export const addTodo = (value) => {
    return {
        type: ADDED,
        payload: value,
    };
};

export const completeToggle = () => {
    return {
        type: COMPLETE,
    };
};

export const colorFilter = (value) => {
    return {
        type: COLOR_SELECT,
        payload: value,
    };
};

export const deleteTodo = () => {
    return {
        type: DELETE,
    };
};

export const completeAllTodo = () => {
    return {
        type: COMPLETE_ALL,
    };
};

export const clearAllTodo = () => {
    return {
        type: CLEAR_COMPLETED,
    };
};
