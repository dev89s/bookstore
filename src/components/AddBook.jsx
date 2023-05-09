// import { useState, useEffect } from 'react';
import AddButton from './AddButton';

function AddBook() {
  return (
    <form className="add-book-form">
      <h2>ADD NEW BOOK</h2>
      <input
        type="text"
        id="book-name"
        placeholder="Book Title"
        // onChange={(e) => { setTitle(e.target.value); }}
      />
      <br />
      <input
        type="text"
        id="book-author"
        placeholder="Author"
        // onChange={(e) => { setAuthor(e.target.value); }}
      />
      <br />
      <input
        type="text"
        id="book-category"
        placeholder="Category"
        // onChange={(e) => { setCategory(e.target.value); }}
      />
      <br />
      <span className="error">Please enter all three feilds</span>
      <AddButton>Add Book</AddButton>
    </form>
  );
}

export default AddBook;
