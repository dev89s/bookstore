import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

function DeleteButton({ itemId }) {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      onClick={() => { dispatch(removeBook({ item_id: itemId })); }}
    >
      Delete
    </button>
  );
}

DeleteButton.propTypes = { itemId: PropTypes.string.isRequired };

export default DeleteButton;
