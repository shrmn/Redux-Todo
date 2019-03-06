import { ADD_TODO } from '../actions';

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
                todos: [...state, action.payload]
            };

    default:
        return state;
    }
}