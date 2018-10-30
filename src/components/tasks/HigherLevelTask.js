import React from 'react';

const HigherLevelTask = () => {
  return (
    <div>
      <div className="container task">
        <div className="row">
          <div className="col-12 col-md-10 offset-1 task-content level-${level}">
            <div className="row">
              <div className="col-1 justify-content-center complete-box my-auto">
                <input type="checkbox" />
                <span className="checkmark"></span>
              </div>
              <div className="col-10 my-auto">
                <p className="counter">Month Day</p>
                <p className="task-name">Task Name</p>
              </div>
              <div className="col-10 offset-1 col-sm-7 collapse task-description edit-this-task-${task.taskID}">
                <p>Description</p>
              </div>
              <div className="col-12 col-sm-4 collapse edit-this-task-${task.taskID}">
                <div className="edit-content btn-group" role="group" aria-label="edit buttons">
                  <button type="button" className="btn edit-button listen-for-me-edit-task" data-toggle="modal" data-target="#edit-task-modal">Edit</button>
                  <button type="button" className="btn edit-button listen-for-me-delete-task" data-toggle="modal" data-target="#delete-task-modal">Delete</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1 edit-container edit-icon d-none d-sm-none d-md-block">
            <img src="assets/edit.png" data-toggle="collapse" data-target=".edit-this-task-${task.taskID}" />
              </div>
            </div>
          </div>
    </div>
  );
};

export default HigherLevelTask;
