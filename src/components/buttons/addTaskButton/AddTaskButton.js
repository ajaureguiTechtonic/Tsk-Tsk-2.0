import React from 'react';
import plusButton from '../../../assets/add.png';
import './AddTaskButton.css';

const AddTaskButton = (props) => {
    function loseFocus() { document.getElementById("forgetMe").blur() };
    return (
      <button id="forgetMe" type="button" onMouseDown={loseFocus} onMouseUp={loseFocus} onClick={props.handleOnClick} className={`btn ${props.buttonClass}`}>
        <img src={plusButton} alt="add symbol" />
        Add Task
      </button>
    );
  };

export default AddTaskButton;
