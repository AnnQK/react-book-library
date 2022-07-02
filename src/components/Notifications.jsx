import React from 'react';

function Notifications() {
  const notificationList = [
    {
      id: 0,
      title: 'Fight Club',
      author: 'Chuck Palahniuk',
      tag: 'Must Read Titles',
      time: '24 minuts ago',
    },
    {
      id: 1,
      title: 'The Trial',
      author: 'Franz Kafka',
      tag: 'Must Read Titles',
      time: '48 minuts ago',
    },
  ];
  return (
    <div className="aside__notifications">
      {notificationList.map((item, idx) => (
        <div key={idx} className="notification">
          <svg
            className="svg-logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300.988 300.988">
            <g>
              <g>
                <path
                  d="M150.494,0.001C67.511,0.001,0,67.512,0,150.495s67.511,150.493,150.494,150.493s150.494-67.511,150.494-150.493
     S233.476,0.001,150.494,0.001z M150.494,285.987C75.782,285.987,15,225.206,15,150.495S75.782,15.001,150.494,15.001
     s135.494,60.782,135.494,135.493S225.205,285.987,150.494,285.987z"
                />
                <polygon points="142.994,142.995 83.148,142.995 83.148,157.995 157.994,157.995 157.994,43.883 142.994,43.883 		" />
              </g>
            </g>
          </svg>
          <div className="notification-info">
            You added <span className="book-title">{item.title}</span> by
            <span className="book-author">{item.author}</span> to your
            <span className="saved-list">{item.tag}</span>
            <div className="notification-time">{item.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Notifications;
