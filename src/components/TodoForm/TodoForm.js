import './TodoForm.scss';

function TodoForm() {
  return (
    <form id='todoForm'>
      <input id="todoInput" type="text" placeholder='Add todo'></input>
      <input id="todoSubmitNew" type="submit" value="+"></input>
    </form>
  );
}

export default TodoForm;
