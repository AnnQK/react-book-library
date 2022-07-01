import React from 'react';

function Notifications() {
  return (
    <div className="aside__notifications">
      <div className="notification">
        <svg id="notification-clock" className="svg-logo">
          <use href="#history"></use>
        </svg>
        <div className="notification-info">
          You added <span className="book-title">Fight Club</span> by
          <span className="book-author">Chuck Palahniuk</span> to your
          <span className="saved-list">Must Read Titles</span>
          <div className="notification-time">24 minuts ago</div>
        </div>
      </div>
      <div className="notification">
        <svg id="notification-clock" className="svg-logo">
          <use href="#history"></use>
        </svg>
        <div className="notification-info">
          You added <span className="book-title">The Trial</span> by
          <span className="book-author">Franz Kafka</span> to your
          <span className="saved-list">Must Read Titles</span>
          <div className="notification-time">48 minuts ago</div>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
