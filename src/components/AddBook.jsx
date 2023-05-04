function AddBook() {
  return (
    <form className="add-book-form">
      <input type="text" name="book-name" id="book-name" placeholder="Book title" />
      <input type="text" name="book-author" id="book-author" placeholder="Author" />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBook;
