import { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import DeleteButton from './DeleteButton';

function BookState({ bookDetails }) {
  useEffect(() => {
    const oval = document.querySelectorAll('.oval');
    oval.forEach((oval) => {
      const ctx = oval.getContext('2d');
      ctx.lineWidth = 80;
      ctx.strokeStyle = '#ddd';

      ctx.beginPath();
      ctx.arc(oval.width / 2, oval.height / 2, 460, 0, 2 * Math.PI);
      ctx.stroke();

      ctx.strokeStyle = '#379cf6';
      ctx.beginPath();
      ctx.arc(oval.width / 2,
        oval.height / 2,
        460, -(Math.PI / 2),
        0.68 * (2 * Math.PI) - Math.PI / 2);
      ctx.stroke();
    });
  });
  return (
    <section className="book-state">
      <div className="book-info-container">
        <p className="book-category">{bookDetails.category}</p>
        <h2 className="book-name details-font">{bookDetails.title}</h2>
        <p className="book-author details-font">{bookDetails.author}</p>
        <div className="book-state-btn-list">
          <button type="button" className="book-state-buttons-1 details-font">Comment</button>
          <div className="line-2" />
          <DeleteButton type="button" itemId={bookDetails.item_id}>
            Delete
          </DeleteButton>
          <div className="line-2" />
          <button type="button" className="book-state-buttons-1 details-font">Edit</button>
        </div>
      </div>
      <div className="book-details-container">
        <canvas width="1000px" height="1000px" className="oval" />
        <div className="percent-container">
          <h2 className="percent-header">68%</h2>
          <span className="percent-completed">Completed</span>
        </div>
        <div className="line-1" />
        <div className="current-chapter">
          <h2 className="chapter-header details-font">CURRENT CHAPTER</h2>
          <p className="chapter-name details-font">Chapter 17</p>
          <button className="progress-update-btn details-font" type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </section>
  );
}

BookState.propTypes = {
  bookDetails: PropTypes.shape(
    {
      item_id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    },
  ).isRequired,
};

export default BookState;
