import { ADD_TODO, TOGGLE_TODO } from '../actions';

const initialState = {
    todos: [
        {
            value: 'Sleep',
            completed: false
        }
    ]
};

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            return {
                todos: [...state.todos, action.payload]
            };    
        case TOGGLE_TODO:
            return {
                todos: state.todos.map((todo, index) => {
                    if (index === action.payload) {
                        return { ...todo, completed: !todo.completed};
                    }
                    return todo;
                })         
            }

        default:
            return state;
    }
}