import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook, deleteBookApi } from '../redux/books/booksSlice';

function DeleteButton({ itemId }) {
  const dispatch = useDispatch();
  return (
    <button
      className="book-state-buttons-1 details-font"
      type="button"
      onClick={() => {
        dispatch(deleteBookApi(itemId));
        dispatch(removeBook({ item_id: itemId }));
      }}
    >
      Remove
    </button>
  );
}

DeleteButton.propTypes = { itemId: PropTypes.string.isRequired };

export default DeleteButton;
