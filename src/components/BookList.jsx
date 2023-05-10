// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import BookState from './BookState';

function BookList() {
  const { books } = useSelector((state) => state.books);
  return (
    <>
      <h2>This is the BookList page</h2>
      {books.map((book) => (
        <BookState key={book.item_id} bookDetails={book} />
      ))}
    </>
  );
}

export default BookList;
