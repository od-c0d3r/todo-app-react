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
      })
    })
  }

  return (
    <div id="todoContainer">
      <Navbar />
      <Header />
      <TodoForm todoApp={todoApp} handleTodosToContainer={handleNewTodo} />
      <TodoList todoApp={todoApp} />
    </div>
  );
}

export default TodoContainer;
