import React from 'react';
import ReactDom from 'react-dom';
import './modal.scss'

const Modal = ({ showModal, openModal, image, title, collection, year }) => {
    return ReactDom.createPortal(
        <>
        { showModal ? (
        <div className="modal">
            <div className="modal-overlay"/>
            <div className="modal-container">
                <img onClick={ openModal } src={ image } alt="artwork" className="modal-content"/>
                <p className="modal-text">{ title }</p>
                <p className="modal-text">{ collection }</p>
                <p className="modal-text">{ year }</p>
            </div>
        </div>
        ): null}
        </>,
        document.getElementById('modal')
    )
}

export default Modal
