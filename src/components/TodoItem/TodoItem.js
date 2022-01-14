/* eslint-disable react/forbid-prop-types */

import './TodoItem.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

function TodoItem(props) {
  const { data } = props;
  const { handleRemoveToItem } = props;
  const { handleCheckToItem } = props;

  const handleRmoveToList = () => handleRemoveToItem(data.id);

  return (
    <div className="todoItem">
      <div className="todoData">
        <input type="checkbox" checked={data.checked} onChange={() => handleCheckToItem(data.id)} required />
        <span className={data.checked ? 'checkedItem' : ''}>{data.title}</span>
      </div>
      <div role="button" tabIndex="-1" className="todoRemoveBtn" onClick={handleRmoveToList} onKeyPress={handleRmoveToList}>
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  );
}

TodoItem.propTypes = {
  data: PropTypes.object.isRequired,
  handleRemoveToItem: PropTypes.func.isRequired,
  handleCheckToItem: PropTypes.func.isRequired,
};

export default TodoItem;
