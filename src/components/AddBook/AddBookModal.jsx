import React from 'react';
import { useDispatch } from 'react-redux';
import { addBookAction } from '../../redux/store/reducers/bookReducer';
import Modal from '../Modal';

function AddBookModal() {
  const dispatch = useDispatch();
  const submitHandler = (data, e) => {
    e.preventDefault();
    const book = {};
  };
  return (
    <Modal modalTitle="add book">
      <form action="#" method="post" className="modal__form">
        <label htmlFor="title" className="modal__form-label">
          Book Title
        </label>
        <input
          type="text"
          name="title"
          className="modal__form__input modal__form__input-title"
          required
        />
        <label htmlFor="author" className="modal__form-label">
          Book Author
        </label>
        <input
          type="text"
          name="author"
          className="modal__form__input modal__form__input-author"
          required
        />
        <label htmlFor="year" className="modal__form-label">
          Year
        </label>
        <input
          type="text"
          name="year"
          className="modal__form__input modal__form__input-title"
          required
        />
        <label htmlFor="title" className="modal__form-label">
          Book Raiting
        </label>
        <input
          type="number"
          name="raiting"
          className="modal__form__input modal__form__input-title"
          required
        />
        <label htmlFor="title" className="modal__form-label">
          Book Description
        </label>
        <input
          type="text"
          name="Description"
          placeholder="Small description"
          className="modal__form__input modal__form__input-title"
          required
        />
        <label htmlFor="cover" className="modal__form-label">
          Book Cover
        </label>
        <input
          type="file"
          className="modal__form__input modal__form__input-cover"
          accept=".jpg, .jpeg, .png"
        />
        <button type="submit" className="modal__btn-submit">
          Submit
        </button>
      </form>
    </Modal>
  );
}

export default AddBookModal;
