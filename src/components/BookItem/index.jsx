import React from "react";
import { useDispatch } from "react-redux";
import { toggleFullInfoAction } from "../../redux/store/reducers/uiReducer";
import { bookInfoContext } from "../../context/BookInfoContext";

function BookItem({ title, author, imgUrl, date, review, description, price }) {
  const raitingStars = new Array(Math.trunc(review)).fill("⭐");
  const dispatch = useDispatch();
  const { setBookInfo } = React.useContext(bookInfoContext);
  const cardClickHandler = () => {
    setBookInfo((prev) => {
      return {
        ...prev,
        title,
        author,
        imgUrl,
        review: raitingStars,
        description,
        price,
      };
    });
    dispatch(toggleFullInfoAction());
  };
  return (
    <div className="book-container" onClick={cardClickHandler}>
      <div className="image-box">
        <img
          src={
            imgUrl ||
            "https://galapagos-pro.com/wp-content/uploads/2021/03/book-placeholder.jpg"
          }
          alt={title}
          className="book-container__image"
        />
      </div>
      <h3 className="book-container__title">{title}</h3>
      <h4 className="book-container__info">Author: {author}</h4>
      <h4 className="book-container__info">Date: {date}</h4>
      <h4 className="book-container__info">Review: {raitingStars}</h4>
    </div>
  );
}

export default BookItem;
