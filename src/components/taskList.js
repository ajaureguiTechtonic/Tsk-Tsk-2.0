import React from 'react';
import LowerLevelTask from './tasks/LowerLevelTask';
import HigherLevelTask from './tasks/HigherLevelTask';

const calcDaysOld = (dateAdded, currentDate) => {
  var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  var dateAdded = new Date(dateAdded).getTime();
  var currentDate = new Date().getTime();
  var daysOld = currentDate - dateAdded;

  return Math.round(daysOld / oneDay);
};

const sortTasks = (task) => {
  var daysOld = calcDaysOld(task.dateAdded, new Date().toDateString());
  var daysPastDue = calcDaysOld(task.dueDate, new Date().toDateString());
  var dueDate = new Date(task.dueDate);
  var dateAdded = new Date(task.dateAdded);

  if (dueDate > dateAdded && daysPastDue < 1) {
    console.log('This task has a future due date');
    var level = 1;
    return level;
  }

  if (task.dueDate === undefined && daysOld <= 3) {
    var level = 1;
  } else if (task.dueDate) {
    var level = 1;
  }

  if (task.dueDate === undefined && daysOld > 3) {
    var level = 2;
  } else if (task.dueDate && daysPastDue >= 1) {
    var level = 2;
  }

  if (task.dueDate === undefined && daysOld > 6) {
    var level = 3;
  } else if (task.dueDate && daysPastDue >= 2) {
    var level = 3;
  }

  if (task.dueDate === undefined && daysOld > 9) {
    var level = 4;
  } else if (task.dueDate && daysPastDue >= 3) {
    var level = 4;
  }

  if (task.dueDate === undefined && daysOld > 13) {
    var level = 5;
  } else if (task.dueDate && daysPastDue >= 4) {
    var level = 5;
  }

  return level;
};

const TaskList = ({ taskList, handleOnClick, handleCollapse, isCollapsed }) => {

  let tasks = taskList.map((task, i) => {
    let level = sortTasks(task);
    if (level < 3) {
      return <LowerLevelTask key={task.taskID}  taskName={task.taskName} description={task.description} dueDate={task.dueDate} dateAdded={task.dateAdded} level={level} handleOnClick={handleOnClick} handleCollapse={handleCollapse} isCollapsed={isCollapsed} />;
    } else {
      return <HigherLevelTask key={task.taskID} taskName={task.taskNAme} description={task.description} dueDate={task.dueDate} level={level} handleOnClick={handleOnClick}/>;
    }
  });

  return (
    <div>
      {tasks}
    </div>
  );
};

export default TaskList;
