import React from "react";
import modalimg from "../../images/images-rules-bonus.svg";
import close from "../../images/icon-close.svg";
import "./Modal.css";

function Modal(props) {
  return (
    <div className="modal">
      <h1>RULES</h1>
      <img src={modalimg} alt="" />
      <button onClick={props.closeModal}>
        <img src={close} alt="" />
      </button>
    </div>
  );
}

export default Modal;
