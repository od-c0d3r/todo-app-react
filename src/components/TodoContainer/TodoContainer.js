import './TodoContainer.scss';
import Header from '../Header/Header.js'
import TodoForm from '../TodoForm/TodoForm.js'
import Navbar from '../Navbar/Navbar.js'
import TodoList from '../TodoList/TodoList.js'

function TodoContainer() {
  return (
    <div id="todoContainer">
      #todoContainer
      <Header />
      <TodoForm />
      <Navbar />
      <TodoList />
    </div>
  );
}

export default TodoContainer;
