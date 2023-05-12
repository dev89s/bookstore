import AddBook from '../components/AddBook';
import BookList from '../components/BookList';

function BooksPage() {
  return (
    <div className="books-page">
      <BookList />
      <div className="line" />
      <AddBook />
    </div>
  );
}

export default BooksPage;
