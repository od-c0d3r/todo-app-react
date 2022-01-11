import { useState, useEffect } from 'react';
import './TodoContainer.scss';
import Header from '../Header/Header.js'
import TodoForm from '../TodoForm/TodoForm.js'
import Navbar from '../Navbar/Navbar.js'
import TodoList from '../TodoList/TodoList.js'

function TodoContainer() {
  const gettodoAppfromLocalStore = () => {
    const temp = localStorage.getItem("todoApp")
    const loadedTodos = JSON.parse(temp)
    return loadedTodos;
  }

  let [todoApp, setTodos] = useState(gettodoAppfromLocalStore() || { id: 0, todos: [] });

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
      const todoAfterCheck = state.todos.map((todo) => {
        if (todo.id === id) return { id: todo.id, checked: !todo.checked, title: todo.title };
        return todo;
      });

      return ({
        ...state,
        todos: todoAfterCheck,
      });
    });
  };

  useEffect(() => {
    const temp = JSON.stringify(todoApp);
    localStorage.setItem("todoApp", temp);
  })

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
