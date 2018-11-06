import React from 'react';
import LowerLevelTask from '../../components/tasks/LowerLevelTask';
import HigherLevelTask from '../../components/tasks/HigherLevelTask';

const calcDaysOld = (dateAdded) => {
  var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  dateAdded = new Date(dateAdded).getTime();
  let currentDate = new Date().getTime();
  var daysOld = currentDate - dateAdded;
  var difference = (daysOld / oneDay);

  // If it isnt a full 24 hours old, return 0,  we can add range to this in the future.
  if (difference < 1) {
    return 0;
  } else {
    return Math.round(daysOld / oneDay);
  }
};

const sortTasks = (task) => {
  var daysOld = calcDaysOld(task.dateAdded, new Date().toDateString());
  var daysPastDue = calcDaysOld(task.dueDate, new Date().toDateString());
  var dueDate = new Date(task.dueDate);
  var dateAdded = new Date(task.dateAdded);
  var level;

  if (dueDate > dateAdded && daysPastDue < 1) {
    level = 1;
    return level;
  }

  if (task.dueDate === undefined && daysOld <= 3) {
    level = 1;
  } else if (task.dueDate) {
    level = 1;
  }

  if (task.dueDate === undefined && daysOld > 3) {
    level = 2;
  } else if (task.dueDate && daysPastDue >= 1) {
    level = 2;
  }

  if (task.dueDate === undefined && daysOld > 6) {
    level = 3;
  } else if (task.dueDate && daysPastDue >= 2) {
    level = 3;
  }

  if (task.dueDate === undefined && daysOld > 9) {
    level = 4;
  } else if (task.dueDate && daysPastDue >= 3) {
    level = 4;
  }

  if (task.dueDate === undefined && daysOld > 13) {
    level = 5;
  } else if (task.dueDate && daysPastDue >= 4) {
    level = 5;
  }

  return level;
};

const TaskList = ({ taskList, handleOnEdit, handleOnDelete }) => {

  let sortedTaskList = taskList.map((task) => {
    let newTaskList = Object.assign({}, task);
    let level = sortTasks(task);
    newTaskList.level = level;
    return newTaskList;
  });

  let sortByLevel = sortedTaskList.sort((a, b) => {
    let aDate = new Date(a.dateAdded);
    let bDate = new Date(b.dateAdded);

    if (a.level > b.level) return -1;
    if (a.level < b.level) return 1;

    if (a.level === 1 && b.level === 1) {
      console.log('hello');
      if (aDate.getTime() > bDate.getTime()) return 1;
      if (aDate.getTime() < bDate.getTime()) return -1;
      if (a.dueDate > b.dueDate) return 1;
      if (a.dueDate < b.dueDate) return -1;
    }

    if (aDate.getTime() > bDate.getTime()) return -1;
    if (aDate.getTime() < bDate.getTime()) return 1;
    if (a.dueDate > b.dueDate) return -1;
    if (a.dueDate < b.dueDate) return 1;
  });

console.log(sortByLevel);


  let tasks = sortByLevel.map((task, i) => {
    let level = sortTasks(task);
    let currentDate = new Date().getTime();
    var daysOld = calcDaysOld(task.dateAdded, currentDate);

    if (level <= 3) {

      return <LowerLevelTask key={task.taskID} id={task.taskID}  taskName={task.taskName} description={task.description} dueDate={task.dueDate} dateAdded={task.dateAdded} level={level} handleOnEdit={handleOnEdit} handleOnDelete={handleOnDelete} daysOld={daysOld} />;
    } else {
      daysOld = calcDaysOld(task.dateAdded, new Date().toDateString());
      var daysPastDue = calcDaysOld(task.dueDate, new Date().toDateString());

      return <HigherLevelTask key={task.taskID} id={task.taskID} taskName={task.taskName} description={task.description} dueDate={task.dueDate} level={level} handleOnEdit={handleOnEdit} handleOnDelete={handleOnDelete} daysOld={daysOld} daysPastDue={daysPastDue} />;
    }
  });

  return (
    <div>
      {tasks}
    </div>
  );
};

export default TaskList;
