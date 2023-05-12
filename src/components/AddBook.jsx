import { useState } from 'react';
import AddButton from './AddButton';

function AddBook() {
  const [book, setBook] = useState({
    title: '',
    author: '',
    category: '',
  });

  return (
    <form className="add-book-form">
      <h2 className="book-form-header">ADD NEW BOOK</h2>
      <div className="book-form-inputs">
        <input
          className="form-input book-name-input"
          type="text"
          id="book-name"
          placeholder="Book Title"
          onChange={(e) => setBook({ ...book, title: e.target.value })}
        />
        <input
          className="form-input"
          type="text"
          id="book-author"
          placeholder="Author"
          onChange={(e) => setBook({ ...book, author: e.target.value })}
        />
        <select
          className="form-input"
          id="book-category"
          defaultValue="Default"
          placeholder="Category"
          onChange={(e) => setBook({ ...book, category: e.target.value })}
        >
          <option value="Default" disabled>Please Choose ...</option>
          <option value="Action">Action</option>
          <option value="Biography">Biography</option>
          <option value="Childrens Literation">Childrens Literature</option>
          <option value="Classic">Classic</option>
          <option value="Economy">Economy</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Fiction">Fiction</option>
          <option value="Graphic Novel">Graphic Novel</option>
          <option value="Historical Fiction">Historical Fiction</option>
          <option value="History">History</option>
          <option value="Horror">Horror</option>
          <option value="Humor">Humor</option>
          <option value="Literary Fiction">Literary Fiction</option>
          <option value="Literature">Literature</option>
          <option value="Memoir">Memoir</option>
          <option value="Mystery">Mystery</option>
          <option value="Nonfiction">Nonfiction</option>
          <option value="Novel">Novel</option>
          <option value="Poetry">Poetry</option>
          <option value="Romance">Romance</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Self Help">Self Help</option>
          <option value="Short Story">Short Story</option>
          <option value="Thriller">Thriller</option>
          <option value="Travel Literature">Travel Literature</option>
          <option value="True Crime">True Crime</option>
        </select>
        <AddButton book={book}>
          Add Book
        </AddButton>
      </div>
      <span className="error">Please enter all three feilds</span>
    </form>
  );
}

export default AddBook;
