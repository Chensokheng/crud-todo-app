import React from 'react';
import firebase from '../util/firebase';
import '../App.css';

export default function Todo({ todo }) {
  const deleteTodo = () => {
    const todoRef = firebase.database().ref('Todo').child(todo.id);
    todoRef.remove();
  };
  const completeTodo = () => {
    const todoRef = firebase.database().ref('Todo').child(todo.id);
    todoRef.update({
      complete: !todo.complete,
    });
  };
  return (
    <div>
      <h1 className={todo.complete ? 'complete' : ''}>{todo.title}</h1>
      <button onClick={deleteTodo}>Delete</button>
      <button onClick={completeTodo}>Complete</button>
    </div>
  );
}
