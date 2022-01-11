import TodoItem from '../TodoItem/TodoItem';
import './TodoList.scss';

function TodoList(props) {
  const { todos } = props.todoApp;
  const { handleRemoveToList } = props;
  const { handleCheckToList } = props;

  const itemsList = todos.map(
    (todo) => <TodoItem
      key={todo.id}
      data={todo}
      handleRemoveToItem={handleRemoveToList}
      handleCheckToItem={handleCheckToList}
    />
  );

  return (
    <div id="todoList">
      {itemsList}
    </div>
  );
}

export default TodoList;
