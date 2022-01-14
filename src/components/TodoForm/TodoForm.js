import './TodoForm.scss';
import PropTypes from 'prop-types';

function TodoForm(props) {
  const { handleTodosToContainer } = props;

  const submitTodo = (e) => {
    console.log(e.target.elements[0].value);
    handleTodosToContainer({
      checked: false,
      title: e.target.elements[0].value,
    });
    e.preventDefault();
    e.target.reset();
  };

  return (
    <form id="todoForm" onSubmit={submitTodo}>
      <input id="todoInput" type="text" placeholder="Add todo" />
      <div className="submitNewCir">
        <input id="todoSubmitNew" type="submit" value="+" />
      </div>
    </form>
  );
}

TodoForm.propTypes = {
  handleTodosToContainer: PropTypes.func.isRequired,
};

export default TodoForm;
