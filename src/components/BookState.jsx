function BookState() {
  return (
    <div className="book-state">
      <section className="book-details-container">
        <p className="book-category">book category</p>
        <h2 className="book-name">book-name</h2>
        <p className="book-author">book-author</p>
        <button type="button">Delete</button>
      </section>
      <div className="book-completion-status">book-completion-status</div>
      <div className="book-state-update">
        <h3>CURRENT CHAPTER</h3>
        <p className="chapter-num">Chapter Number</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
}

export default BookState;
