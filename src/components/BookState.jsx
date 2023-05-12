import { PropTypes } from 'prop-types';
import DeleteButton from './DeleteButton';

function BookState({ bookDetails }) {
  return (
    <div className="book-state">
      <section className="book-details-container">
        <p className="book-category">{bookDetails.category}</p>
        <h2 className="book-name details-font">{bookDetails.title}</h2>
        <p className="book-author details-font">{bookDetails.author}</p>
        <div className="book-state-btn-list">
          <button type="button" className="book-state-buttons-1 details-font">Comment</button>
          <div className="line-2" />
          <DeleteButton type="button" itemId={bookDetails.item_id}>
            Delete
          </DeleteButton>
          <div className="line-2" />
          <button type="button" className="book-state-buttons-1 details-font">Edit</button>
        </div>
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
