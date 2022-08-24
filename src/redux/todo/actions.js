import {
    TODO_ADDED,
    COMPLETED_TOGGLE,
    COLOR_SELECT,
    DELETE,
    COMPLETE_ALL,
    CLEAR_COMPLETED,
} from './actionTypes';

export const addTodo = (value) => {
    return {
        type: TODO_ADDED,
        payload: value,
    };
};

export const completeToggle = (id) => {
    return {
        type: COMPLETED_TOGGLE,
        payload: id
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
