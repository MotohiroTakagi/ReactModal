import React, {useState} from "react";
import Modal from "./components/Modal"

const App = () => {

  const [showModal, setShowModal] = useState(false);

  const ShowModal = () => {
    setShowModal(true);
  };
  return (
    <>
      <h2>Modal実装</h2>
      <button onClick={ShowModal}>Open Modal</button>
      <Modal showModal={showModal} setShowModal={setShowModal} content="親から渡された値です。"/>
    </>
  );
}

export default App;
