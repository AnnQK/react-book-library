import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { toggleAddBookAction } from '../../redux/store/reducers/uiReducer';
import { addBookAction } from '../../redux/store/reducers/bookReducer';
import Label from '../ui/Label';
import Modal from '../ui/Modal';

function AddBookModal() {
  const tags = useSelector((state) => state.filter.tagList);
  const dispatch = useDispatch();
  const submitHandler = (data, e) => {
    e.preventDefault();
    const book = {
      title: data.title,
      author: data.author,
      date: Number(data.year),
      review: Number(data.raiting),
      tag: Number(data.tag),
      description: data.description,
      price: 10,
      id: Date.now(),
    };
    dispatch(addBookAction(book));
    dispatch(toggleAddBookAction());
  };
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      title: '',
      author: '',
      year: '',
      raiting: '',
      description: '',
      tag: '',
    },
  });
  return (
    <Modal closeModal={() => dispatch(toggleAddBookAction())} modalTitle="add book">
      <form onSubmit={handleSubmit(submitHandler)} className="modal__form">
        <Label valid={errors?.title}>{errors?.title ? errors.title.message : 'Book Title'}</Label>
        <input
          type="text"
          className="modal__form__input"
          {...register('title', {
            required: 'Title is required',
          })}
        />
        <Label valid={errors?.author}>
          {errors?.author ? errors.author.message : 'Book Author'}
        </Label>
        <input
          type="text"
          {...register('author', {
            required: 'Author is required',
          })}
          className="modal__form__input"
        />
        <Label valid={errors?.year}>{errors?.year ? errors.year.message : 'Book Year'}</Label>
        <input
          type="number"
          {...register('year', {
            required: 'Year is required',
            min: {
              value: 1300,
              message: 'Enter a valid number',
            },
            max: {
              value: 2025,
              message: 'Enter a valid number',
            },
          })}
          className="modal__form__input"
        />
        <Label valid={errors?.raiting}>
          {errors?.raiting ? errors.raiting.message : 'Book Raiting'}
        </Label>
        <input
          type="number"
          className="modal__form__input"
          {...register('raiting', {
            required: 'Raiting is required',
            min: {
              value: 0,
              message: 'Enter a number between 0 and 5',
            },
            max: {
              value: 5,
              message: 'Enter a number between 0 and 5',
            },
          })}
        />
        <Label valid={errors?.description}>
          {errors?.description ? errors.description.message : 'Book Description'}
        </Label>
        <input
          type="text"
          className="modal__form__input"
          {...register('description', {
            required: false,
            maxLength: {
              value: 100,
              message: 'Description must be less than 100 characters',
            },
          })}
        />
        {/* <Label>Book Cover</Label>
        <input
          type="file"
          className="modal__form__input modal__form__input-cover"
          accept=".jpg, .jpeg, .png"
        /> */}
        <Label valid={errors?.tag}>{errors?.tag ? errors.tag.message : 'Book Tag'}</Label>
        <select
          className="modal__form__select"
          {...register('tag', {
            required: 'Add tag for this book',
          })}>
          {tags.map((item) => (
            <option key={item.type} value={item.type}>
              {item.name}
            </option>
          ))}
        </select>
        <button type="submit" className="modal__btn-submit">
          Submit
        </button>
      </form>
    </Modal>
  );
}

export default AddBookModal;
