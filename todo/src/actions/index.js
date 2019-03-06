export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const addTodo = (newTodo) => {
    
    return {
        type: ADD_TODO,
        payload: newTodo
    };
};

export const toggleTodo = (index) => {
    return {
        type: TOGGLE_TODO,
        payload: index
    };
};