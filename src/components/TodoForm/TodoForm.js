import './TodoForm.scss';

function TodoForm() {
  return (
    <form id='todoForm'>
      <input id="todoInput" type="text" placeholder='Add todo'></input>
      <div className='submitNewCir'>
        <input id="todoSubmitNew" type="submit" value="+"></input>
      </div>
    </form>
  );
}

export default TodoForm;
