import React, {useState} from "react";
import Modal from "./components/Modal"

const App = () => {

  const [showModal, setShowModal] = useState(false);

  const ShowModal = () => {
    setShowModal(true);
  };
  <button onClick={ShowModal}>Open Modal</button>
  return (
    <>
      <h2>Modal実装</h2>
      <button>Open Modal</button>
      <Modal showFlag={showModal} setShowModal={setShowModal} />
    </>
  );
}

export default App;