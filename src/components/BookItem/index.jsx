import React from 'react';

function BookItem({ title, author, imgUrl, date, review }) {
  return (
    <div className="book-container">
      <div className="image-box">
        <img src={imgUrl} alt={title} className="book-container__image" />
      </div>
      <h3 className="book-container__title">{title}</h3>
      <h4 className="book-container__info">Author: {author}</h4>
      <h4 className="book-container__info">Date: {date}</h4>
      <h4 className="book-container__info">Review: {review} ⭐</h4>
    </div>
  );
}

export default BookItem;
