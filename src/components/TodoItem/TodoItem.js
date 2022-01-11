import './TodoItem.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function TodoItem(props) {
  const { data } = props;
  const { handleRemoveToItem } = props;
  const { handleCheckToItem } = props;

  return (
    <div className='todoItem'>
      <div className='todoData'>
        <input type="checkbox" checked={data.checked} onChange={()=> handleCheckToItem(data.id)} required={true}></input>
        <span className={data.checked ? 'checkedItem' : ''}>{data.title}</span>
      </div>
      <div className='todoRemoveBtn' onClick={() => handleRemoveToItem(data.id)} >
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  );
}

export default TodoItem;
