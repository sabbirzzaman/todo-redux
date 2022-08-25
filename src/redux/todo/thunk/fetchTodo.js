import { loadTodo } from "../actions";

const fetchTodo = async (dispatch) => {
    const res = await fetch('http://localhost:9000/todos')
    const todo = await res.json();

    dispatch(loadTodo(todo));
}

export default fetchTodo;