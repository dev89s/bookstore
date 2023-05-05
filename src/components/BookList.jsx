import PropTypes from 'prop-types';
import BookState from './BookState';

function BookList({ booklist }) {
  return (
    <>
      <h2>This is the BookList page</h2>
      {booklist.map((book) => (
        <BookState key={book.id} bookDetails={book} />
      ))}
    </>
  );
}

BookList.propTypes = {
  booklist: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      bookName: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      completion: PropTypes.string.isRequired,
      currentChapter: PropTypes.string.isRequired,
    },
  )).isRequired,
};

export default BookList;
