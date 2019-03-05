import React from 'react';
import { connect } from 'react-redux';
import { completeTodo, removeTodo } from '../actions/actions';

const style = { backgroundColor: '#CCC', color: 'gray' };
const Todos = props => {
  return (
    <>
      {props.todos.map(todo => (
        <li
          style={todo.completed ? style : null}
          onClick={() => props.completeTodo(todo.id)}
          key={todo.id}
        >
          {todo.text}
        </li>
      ))}
      <button className="clear-completed" onClick={() => props.removeTodo()}>Remove Completed</button>
    </>
  );
};

export default connect(null, { completeTodo, removeTodo })(Todos);