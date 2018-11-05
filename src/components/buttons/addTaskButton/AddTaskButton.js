import React from 'react';
import plusButton from '../../../assets/add.png';
import './AddTaskButton.css';

const AddTaskButton = (props) => {
    return (
      <button type="button" onClick={props.handleOnClick} className={`btn ${props.buttonClass}`}>
        <img src={plusButton} alt="add symbol" />
        Add Task
      </button>
    );
  };

export default AddTaskButton;
