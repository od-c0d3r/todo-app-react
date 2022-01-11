import TodoItem from '../TodoItem/TodoItem';
import './TodoList.scss';
// import data from './../../data'

function TodoList(props) {
  const {todos} = props.todoApp;
  console.log(todos);

  const itemsList = todos.map((todo) => {
    return <TodoItem key={todo.id} data={todo} />
  });

  return (
    <div id="todoList">
      {itemsList}
    </div>
  );
}

export default TodoList;
