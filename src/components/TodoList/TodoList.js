import TodoItem from '../TodoItem/TodoItem';
import './TodoList.scss';

function TodoList(props) {
  const { todos } = props.todoApp;
  const { handleTodosToList } = props;

  const itemsList = todos.map(
    (todo) => <TodoItem
      key={todo.id}
      data={todo}
      handleRemoveTodoToList={handleTodosToList}
    />
  );

  return (
    <div id="todoList">
      {itemsList}
    </div>
  );
}

export default TodoList;
