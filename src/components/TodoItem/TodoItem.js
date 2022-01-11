import './TodoItem.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function TodoItem(props) {
  const { data } = props;

  return (
    <div className='todoItem'>
      <div className='todoData'>
        <input type="checkbox" checked={data.checked} readOnly ></input>
        <span className={data.checked ? 'checkedItem' : ''}>{data.title}</span>
      </div>
      <div className='todoRemoveBtn'>
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div >
  );
}

export default TodoItem;
