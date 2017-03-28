
export function addTodo(text) {
    return {
        type: 'ADD_TODO',
        text,
        payload: 1
    }
}

export function delTodo(text) {
    return {
        type: 'DEL_TODO',
        text,
        payload: 2
    }
}
