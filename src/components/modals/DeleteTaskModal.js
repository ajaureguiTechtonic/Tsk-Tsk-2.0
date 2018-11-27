import React from 'react';
import './modals.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import axios from 'axios';

// const deleteTaskDB = (id) => {
//   const headers = {
//     'x-access-token': sessionStorage.getItem('jwt-token'),
//   };
//
//   axios.delete(`http://localhost:4000/tsktsk`, {
//     _id: id,
//   }, { headers: headers });
// };

const DeleteTaskModal = (props) => {
  console.log(props);
  return (
    <div>
      <Modal id="delete-task-modal" isOpen={props.isOpen} toggle={props.handleOnClick} tabIndex="-1" role="dialog"  aria-labelledby="delete-modal-label" aria-hidden="true">
        <ModalHeader>
          <p className="modal-title" id="delete-modal-label">Delete Task?</p>
        </ModalHeader>
        <ModalBody>
          <p>Is this important?</p>
        </ModalBody>
        <ModalFooter>
          <Button type="button" className="btn modal-buttons" onClick={props.handleOnClick}>Keep It</Button>
          <Button type="button" className="btn modal-buttons" onClick={(e) => {
            props.handleOnClick(e);
            props.handleDeleteTask(e);
          }}>Delete It</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default DeleteTaskModal;
