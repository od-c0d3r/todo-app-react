import './TodoList.scss';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem/TodoItem';

function TodoList(props) {
  const { todoApp } = props;
  const { handleRemoveToList } = props;
  const { handleCheckToList } = props;
  const { todos } = todoApp;

  const itemsList = todos.map(
    (todo) => (
      <TodoItem
        key={todo.id}
        data={todo}
        handleRemoveToItem={handleRemoveToList}
        handleCheckToItem={handleCheckToList}
      />
    ),
  );

  return (
    <div id="todoList">
      {itemsList}
    </div>
  );
}

TodoList.propTypes = {
  todoApp: PropTypes.object.isRequired,
  handleRemoveToList: PropTypes.func.isRequired,
  handleCheckToList: PropTypes.func.isRequired,
};

export default TodoList;
