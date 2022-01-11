import './TodoForm.scss';

function TodoForm(props) {
  const { handleTodosToContainer } = props;

  const submitTodo = (e) => {
    handleTodosToContainer({
      checked: false,
      title: e.target.elements[0].value,
    });
    e.preventDefault();
    e.target.reset();
  }

  return (
    <form id='todoForm' onSubmit={submitTodo}>
      <input id="todoInput" type="text" placeholder='Add todo'></input>
      <div className='submitNewCir'>
        <input id="todoSubmitNew" type="submit" value="+"></input>
      </div>
    </form>
  );
}

export default TodoForm;
