import { useState, useEffect } from 'react';
import './TodoContainer.scss';
import Header from '../Header/Header';
import TodoForm from '../TodoForm/TodoForm';
import Navbar from '../Navbar/Navbar';
import TodoList from '../TodoList/TodoList';

function TodoContainer() {
  const gettodoAppfromLocalStore = () => {
    const temp = localStorage.getItem('todoApp');
    const loadedTodos = JSON.parse(temp);
    return loadedTodos;
  };

  const [todoApp, setTodos] = useState(gettodoAppfromLocalStore() || { id: 0, todos: [] });

  const handleNewTodo = (todo) => {
    setTodos((state) => {
      const newTodo = { ...todo, id: Number(state.id) + 1 };
      return ({
        id: Number(state.id) + 1,
        todos: [...state.todos, newTodo],
      });
    });
  };

  const removeTodo = (id) => {
    setTodos((state) => {
      const todosAfterRemoval = state.todos.filter((todo) => todo.id !== id);
      return ({
        ...state,
        todos: todosAfterRemoval,
      });
    });
  };

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
    localStorage.setItem('todoApp', temp);
  });

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
