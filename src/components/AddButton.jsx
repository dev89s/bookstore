import { useDispatch, useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import { addBook, createBookApi } from '../redux/books/booksSlice';

function AddButton({ book }) {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.booksState);
  const { title, author, category } = book;
  const titleInput = document.querySelector('#book-name');
  const authorInput = document.querySelector('#book-author');
  const categoryInput = document.querySelector('#book-category');
  const handleClick = () => {
    // Update item_key
    let key;
    if (books.length === 0) {
      key = 'item1';
    } else {
      key = books[books.length - 1].item_id.split('');
      const id = key[key.length - 1];
      key.pop();
      key.push(Number(id) + 1);
      key = key.join('');
    }
    // create book item
    const book = {
      item_id: key,
      title,
      author,
      category,
    };

    // Add book to the store and update UI
    if (title !== '' && author !== '' && category !== '') {
      dispatch(createBookApi(book));
      dispatch(addBook({ book }));
      titleInput.value = '';
      authorInput.value = '';
      categoryInput.value = '';
    } else {
      const error = document.querySelector('.error');
      error.style.display = 'block';
      setTimeout(() => {
        error.style.display = 'none';
      }, 3000);
    }
  };
  return (
    <button
      className="add-button form-input details-font"
      type="button"
      onClick={handleClick}
    >
      Add Book
    </button>
  );
}

AddButton.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default AddButton;
