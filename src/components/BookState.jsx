import { PropTypes } from 'prop-types';
import DeleteButton from './DeleteButton';

function BookState({ bookDetails }) {
  return (
    <div className="book-state">
      <section className="book-details-container">
        <p className="book-category">{bookDetails.category}</p>
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
