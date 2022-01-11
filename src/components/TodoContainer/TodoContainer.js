import { useState } from 'react';
import './TodoContainer.scss';
import Header from '../Header/Header.js'
import TodoForm from '../TodoForm/TodoForm.js'
import Navbar from '../Navbar/Navbar.js'
import TodoList from '../TodoList/TodoList.js'

function TodoContainer() {
  let [todoApp, setTodos] = useState({ id: 0, todos: [] });

  const handleNewTodo = (todo) => {
    setTodos((state) => {
      todo.id = Number(state.id) + 1;
      return ({
        id: Number(state.id) + 1,
        todos: [...state.todos, todo]
      });
    });
  }

  const removeTodo = (id) => {
    setTodos((state) => {
      let todosAfterRemoval = state.todos.filter(function (todo) {
        return todo.id !== id;
      });
      return ({
        ...state,
        todos: todosAfterRemoval
      });
    });
  }

  const checkTodo = (id) => {
    setTodos((state) => {
      const todoAfterCheck = [];
      const todo = state.todos.find(function (todo) {
        return todo.id === id
      });
      const todoId = state.todos.indexOf(todo);
      state.todos.map((todo, mapId) => {
        if (mapId === todoId) {
          todoAfterCheck.push({id:todo.id,checked:!todo.checked, title:todo.title});
          return true;
        }
        todoAfterCheck.push(todo)
      });
      return ({
        ...state,
        todos: todoAfterCheck,
      });
    });
  }

  return (
    <div id="todoContainer">
      <Navbar />
      <Header />
      <TodoForm todoApp={todoApp} handleTodosToContainer={handleNewTodo} />
      <TodoList todoApp={todoApp} handleRemoveToList={removeTodo} handleCheckToList={checkTodo} />
    </div>
  );
}

export default TodoContainer;
