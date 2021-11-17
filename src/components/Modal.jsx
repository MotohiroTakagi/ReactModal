const Modal = (props) => {
  return (
    <>
      {props.showFlag ? (
        <div id="overlay">
          <div id="modalContent">
            <p>This is ModalContent</p>
            <button>Close</button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Modal;