import './TodoItem.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function TodoItem(props) {
  const { data } = props;
  const { handleRemoveTodoToList } = props;

  const onChecked = (e) => {
    console.log(e.target);
  }

  return (
    <div className='todoItem'>
      <div className='todoData'>
        <input type="checkbox" checked={data.checked} onChange={onChecked} ></input>
        <span className={data.checked ? 'checkedItem' : ''}>{data.title}</span>
      </div>
      <div className='todoRemoveBtn' onClick={() => handleRemoveTodoToList(data.id)} >
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  );
}

export default TodoItem;
