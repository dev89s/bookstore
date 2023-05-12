// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBooksApi } from '../redux/books/booksSlice';
import BookState from './BookState';

function BookList() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.booksState.isLoading);
  const listState = useSelector((state) => state.booksState.listState);
  const { books } = useSelector((state) => state.booksState);

  useEffect(() => {
    if (listState === 'idle') {
      dispatch(getBooksApi());
    }
  }, [dispatch, listState]);

  if (isLoading) {
    return (
      <div className="book-list">
        <h2>List is loading...</h2>
        {books.map((book) => (
          <BookState key={book.item_id} bookDetails={book} />
        ))}
      </div>
    );
  }
  return (
    <div className="book-list">
      {books.length === 0 ? <h2>Book list is empty</h2> : null}
      {books.map((book) => (
        <BookState key={book.item_id} bookDetails={book} />
      ))}
    </div>
  );
}

export default BookList;
