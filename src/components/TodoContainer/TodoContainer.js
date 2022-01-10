import './TodoContainer.scss';
import Header from '../Header/Header.js'
import InputTodo from '../InputTodo/InputTodo.js'
import Navbar from '../Navbar/Navbar.js'
import TodoList from '../TodoList/TodoList.js'

function TodoContainer() {
  return (
    <div id="todoContainer">
      #todoContainer
      <Header />
      <InputTodo />
      <Navbar />
      <TodoList />
    </div>
  );
}

export default TodoContainer;
