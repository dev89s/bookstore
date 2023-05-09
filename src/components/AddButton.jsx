import { useDispatch, useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import { addBook } from '../redux/books/booksSlice';

function AddButton() {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);
  const handleClick = () => {
    // Get book values from form
    const title = document.querySelector('#book-name').value;
    const author = document.querySelector('#book-author').value;
    const category = document.querySelector('#book-category').value;

    // Update item_key
    let key = books[books.length - 1].item_id.split('');
    const id = key[key.length - 1];
    key.pop();
    key.push(Number(id) + 1);
    key = key.join('');

    // create book item
    const book = {
      item_id: key,
      title,
      author,
      category,
    };

    if (title !== '' && author !== '' && category !== '') {
      dispatch(addBook({ book }));
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
      type="button"
      onClick={handleClick}
    >
      Add Book
    </button>
  );
}

AddButton.propsTypes = {
  props: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }),
};

export default AddButton;