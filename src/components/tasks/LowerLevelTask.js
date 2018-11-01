import React from 'react';
import editButton from '../../assets/edit.png';

const LowerLevelTask = ({ taskName, description, level, handleOnClick, id, dueDate, dateAdded, daysOld }) => {
// console.log(dueDate);
    if (dueDate === undefined) {
      var month = daysOld;
      var day = 'Days Old';
    } else {
      dueDate = (dueDate).split(' ');
      var month = dueDate[1];
      var day = dueDate[2];
    };

    return (
      <div>
        <div id={id} className="container task">
          <div className="row">
            <div className={`col-12 col-md-10 offset-1 task-content level-${level}`}>
              <div className="row">
                <div className="col-2 col-md-1 justify-content-center complete-box my-auto ">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </div>
                <div className="col-7 col-md-9 d-flex">
                  <p className="m-0 align-self-center">{ taskName }</p>
                </div>
                <div className="col-3 col-md-2 d-flex justify-content-center">
                  <div className="align-self-center text-center days-old-count">
                    <p className="m-0">{ month }</p>
                    <p className="m-0 days-old">{ day }</p>
                  </div>
                </div>
                <div className={`col-10 offset-1 col-sm-7 collapse task-description edit-this-task-${id}`}>
                  <p>{ description }</p>
                </div>
                <div className={`col-12 col-sm-4 collapse edit-this-task-${id}`}>
                  <div className="edit-content btn-group" role="group" aria-label="edit buttons">
                    <button type="button" className="btn edit-button listen-for-me-edit-task" data-toggle="modal" data-target="#edit-task-modal">Edit</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1 edit-container edit-icon d-none d-sm-none d-md-block">
              <img src={ editButton } onClick={handleOnClick} />
            </div>
          </div>
        </div>
      </div>
    );
  };

export default LowerLevelTask;
