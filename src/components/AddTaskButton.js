import React from 'react';
import plusButton from '.././assets/add.png';

const AddTaskButton = function (props) {
    return (
      <button type="button" onClick={ props.onClick } className="btn add-task-button">
        <img src={ plusButton } alt="add symbol" />
        Add Task
      </button>
    );
  };

export default AddTaskButton;
