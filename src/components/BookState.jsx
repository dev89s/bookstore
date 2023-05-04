import { PropTypes } from 'prop-types';

function BookState({ bookDetails }) {
  return (
    <div className="book-state">
      <section className="book-details-container">
        <p className="book-category">{bookDetails.category}</p>
        <h2 className="book-name">{bookDetails.bookName}</h2>
        <p className="book-author">{bookDetails.author}</p>
        <button type="button">Delete</button>
      </section>
      <div className="book-completion-status">{bookDetails.completion}</div>
      <div className="book-state-update">
        <h3>CURRENT CHAPTER</h3>
        <p className="chapter-num">{bookDetails.currentChapter}</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
}

BookState.propTypes = {
  bookDetails: PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      bookName: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      completion: PropTypes.string.isRequired,
      currentChapter: PropTypes.string.isRequired,
    },
  ).isRequired,
};

export default BookState;
