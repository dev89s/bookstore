import AddBook from '../components/AddBook';
import BookList from '../components/BookList';

function BooksPage() {
  const booklist = [
    {
      id: 1,
      category: 'Action',
      bookName: 'The Hunter Games',
      author: 'Suzanne Collins',
      completion: '64%',
      currentChapter: 'Chapter 17',
    },
    {
      id: 2,
      category: 'Science Fiction',
      bookName: 'Dune',
      author: 'Frank Herbert',
      completion: '8%',
      currentChapter: 'Chapter 3: "A Lesson Learn"',
    },
    {
      id: 3,
      category: 'Economy',
      bookName: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      completion: '0%',
      currentChapter: 'Introduction',
    },
  ];
  return (
    <div className="books-page">
      <BookList booklist={booklist} />
      <AddBook />
    </div>
  );
}

export default BooksPage;
