import React from 'react';
import { connect } from 'react-redux';

const TodoList = (props) => {
    
    return (
        <div>
            {props.todos.map((todo) =>{
                <p key={index}>{todo.value}</p>
            })}
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
    {}
)(TodoList);