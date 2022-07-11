import React from "react";
import { useDispatch } from "react-redux";
import { toggleFullInfoAction } from "../../redux/store/reducers/uiReducer";
import styles from "./BookFull.module.scss";
import Modal from "../ui/Modal";
import { bookInfoContext } from "../../context/BookInfoContext";

function BookFull({ title, author, imgUrl, price, review, description }) {
  const { bookInfo } = React.useContext(bookInfoContext);
  console.log(bookInfo);
  const dispatch = useDispatch();
  return (
    <Modal
      modalTitle="Book Info"
      closeModal={() => dispatch(toggleFullInfoAction())}
    >
      <div className={styles.container}>
        <div className={styles["image-box"]}>
          <img
            className={styles.image}
            src={bookInfo.imgUrl}
            alt="book-cover"
          />
        </div>
        <h2 className={styles.title}>Title: {bookInfo.title}</h2>
        <h3 className={styles.author}>Author: {bookInfo.author}</h3>
        <p className={styles.description}>{bookInfo.description}</p>
        <h4 className={styles.raiting}>Raiting: {bookInfo.review}</h4>
        <h4 className={styles.price}>Price: {bookInfo.price}$</h4>
      </div>
    </Modal>
  );
}

export default BookFull;
