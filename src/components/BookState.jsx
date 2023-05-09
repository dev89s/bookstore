import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import DeleteButton from './DeleteButton';
import { filterCategory } from '../redux/books/booksSlice';

function BookState({ bookDetails }) {
  const dispatch = useDispatch();
  const clickHandler = (e) => {
    e.preventDefault();
    const category = e.target.textContent;
    dispatch(filterCategory({ category }));
  };
  return (
    <div className="book-state">
      <section className="book-details-container">
        <a href="/" onClick={clickHandler} className="book-category">{bookDetails.category}</a>
        <h2 className="book-name">{bookDetails.title}</h2>
        <p className="book-author">{bookDetails.author}</p>
        <DeleteButton type="button" itemId={bookDetails.item_id}>
          Delete
        </DeleteButton>
      </section>
    </div>
  );
}

BookState.propTypes = {
  bookDetails: PropTypes.shape(
    {
      item_id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    },
  ).isRequired,
};

export default BookState;
