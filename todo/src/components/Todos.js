import React from 'react';
import { connect } from 'react-redux';
import { completeTodo, removeTodo } from '../actions/actions';
import uuidv4 from 'uuid'


const style = { backgroundColor: '#CCC', color: 'gray' };
const Todos = props => {
  return (
    <>
      {props.todos.map(todo => (
        <li
          style={todo.completed ? style : null}
          onClick={() => props.completeTodo(todo.id)}
          key={uuidv4()}
        >
          {todo.text}
        </li>
      ))}
      <button className="clear-completed" onClick={() => props.removeTodo()}>Remove Completed</button>
    </>
  );
};

export default connect(null, { completeTodo, removeTodo })(Todos);