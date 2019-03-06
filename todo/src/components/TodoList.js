import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';

const TodoList = (props) => {
    const toggleTodo = (e, index) => {
        e.preventDefault();
        props.toggleTodo(index);
    }
    
    const displayTodos = props.todos.map((todo, index) => (
        <p
        key={index}
        onClick={( e => toggleTodo(e, index))}
        >
            {todo.value}
        </p>
    ))
    return (
        <div>
            {displayTodos}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        todos: state.todos
    };
};

export default connect(
    mapStateToProps,
    { toggleTodo }
)(TodoList);