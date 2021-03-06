import React from 'react';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
  return <div className="overlay" onClick={props.closeModal} />;
};

function ModalOverlay({ modalTitle, children, closeModal }) {
  return (
    <div className="modal">
      <button onClick={() => closeModal()} className="modal__btn-close">
        <svg
          className="svg-logo close-modal"
          xmlns="http://www.w3.org/2000/svg"
          width="122.878px"
          height="122.88px"
          viewBox="0 0 122.878 122.88"
          enableBackground="new 0 0 122.878 122.88">
          <g>
            <path d="M1.426,8.313c-1.901-1.901-1.901-4.984,0-6.886c1.901-1.902,4.984-1.902,6.886,0l53.127,53.127l53.127-53.127 c1.901-1.902,4.984-1.902,6.887,0c1.901,1.901,1.901,4.985,0,6.886L68.324,61.439l53.128,53.128c1.901,1.901,1.901,4.984,0,6.886 c-1.902,1.902-4.985,1.902-6.887,0L61.438,68.326L8.312,121.453c-1.901,1.902-4.984,1.902-6.886,0 c-1.901-1.901-1.901-4.984,0-6.886l53.127-53.128L1.426,8.313L1.426,8.313z" />
          </g>
        </svg>
      </button>
      <h2 className="modal__title">{modalTitle}</h2>
      {children}
    </div>
  );
}

function Modal(props) {
  const [domReady, setDomReady] = React.useState(false);
  React.useEffect(() => {
    setDomReady(true);
  });

  return domReady ? (
    <>
      {ReactDOM.createPortal(
        <Backdrop closeModal={props.closeModal} />,
        document.getElementById('backdrop-root'),
      )}
      {ReactDOM.createPortal(<ModalOverlay {...props} />, document.getElementById('modal-root'))}
    </>
  ) : null;
}

export default Modal;
