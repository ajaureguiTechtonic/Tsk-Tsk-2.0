import React from 'react';
import editButton from '../../assets/edit.png';

const LowerLevelTask = ({taskName, description}) => {
  
  return (
    <div>
      <div className="container task">
        <div className="row">
          <div className="col-12 col-md-10 offset-1 task-content level-${level}">
            <div className="row">
              <div className="col-2 col-md-1 justify-content-center complete-box my-auto ">
                <input type="checkbox" />
                <span className="checkmark"></span>
              </div>
              <div className="col-7 col-md-9 d-flex">
                <p className="m-0 align-self-center">{taskName}</p>
              </div>
              <div className="col-3 col-md-2 d-flex justify-content-center">
                <div className="align-self-center text-center days-old-count">
                  <p className="m-0">Month</p>
                  <p className="m-0 days-old">Day</p>
                </div>
              </div>
              <div className="col-10 offset-1 col-sm-7 collapse task-description edit-this-task-${task.taskID}">
                <p>{description}</p>
              </div>
              <div className="col-12 col-sm-4 collapse edit-this-task-${task.taskID}">
                <div className="edit-content btn-group" role="group" aria-label="edit buttons">
                  <button type="button" className="btn edit-button listen-for-me-edit-task" data-toggle="modal" data-target="#edit-task-modal">Edit</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1 edit-container edit-icon d-none d-sm-none d-md-block">
            <img src={ editButton } data-toggle="collapse" data-target=".edit-this-task-${task.taskID}" />
          </div>
        </div>
      </div>
        </div>
      );
    };

export default LowerLevelTask;
