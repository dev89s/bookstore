import { useState, useEffect } from 'react';
import AddButton from './AddButton';

function AddBook() {
  const [book, setBook] = useState({
    title: '',
    author: '',
    category: '',
  });

  useEffect(() => {
    console.log(book);
  }, [setBook]);

  return (
    <form className="add-book-form">
      <h2>ADD NEW BOOK</h2>
      <input
        type="text"
        id="book-name"
        placeholder="Book Title"
        onChange={(e) => setBook({ ...book, title: e.target.value })}
      />
      <br />
      <input
        type="text"
        id="book-author"
        placeholder="Author"
        onChange={(e) => setBook({ ...book, author: e.target.value })}
      />
      <br />
      <input
        type="text"
        id="book-category"
        placeholder="Category"
        onChange={(e) => setBook({ ...book, category: e.target.value })}
      />
      <br />
      <span className="error">Please enter all three feilds</span>
      <AddButton book={book}>
        Add Book
      </AddButton>
    </form>
  );
}

export default AddBook;
