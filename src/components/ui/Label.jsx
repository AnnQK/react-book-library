function Label(props) {
  return (
    <label
      {...props}
      className={props.valid ? 'modal__form-label-error' : 'modal__form-label'}></label>
  );
}

export default Label;
