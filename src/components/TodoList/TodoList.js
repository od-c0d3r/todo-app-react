import TodoItem from '../TodoItem/TodoItem';
import './TodoList.scss';

function TodoList(props) {
  const { todos } = props
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
