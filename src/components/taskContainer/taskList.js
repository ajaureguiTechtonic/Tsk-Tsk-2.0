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
  if (difference < .99) {
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

  let leveledTaskList = taskList.map((task) => {
    let level = sortTasks(task);
    task.level = level;
    return task;
  });

  let sortByLevel = function () {
    let sortedByLevel = leveledTaskList.sort((a, b) => b.level - a.level);
    return sortedByLevel;
  };

  let sortByDateAdded = function () {
    let levels = sortByLevel();
    // console.log(levels);
    let index = 0;
    console.log(levels);
    let sortedbyDate = levels.sort((a, b) => {
      let aDate = new Date (a.dateAdded);
      let bDate = new Date (b.dateAdded);
      // console.log('A'+ aDate);
      // console.log('B'+ bDate);
      if (levels[index].level == 5){
        console.log("level five task");
        if (aDate.getTime() < bDate.getTime()) {
          console.log('A', levels[index].dateAdded);
          console.log('B', levels[index + 1].dateAdded);
          var temp = a;  //Temporary variable to hold the current number
          levels[index] = b; //Replace current number with adjacent number
          levels[index + 1] = temp; //Replace adjacent number with current number

        }else {
          return leveledTaskList;
        }
      }

      index++;
    });
    // console.log(levels);
    return levels;
  };

  let tasks = sortByDateAdded().map((task, i) => {
    let level = sortTasks(task);
    let currentDate = new Date().getTime();
    var daysOld = calcDaysOld(task.dateAdded, currentDate);

    if (level <= 3) {

      return <LowerLevelTask key={task.taskID} id={task.taskID} taskName={task.taskName} description={task.description} dueDate={task.dueDate} dateAdded={task.dateAdded} level={level} handleOnEdit={handleOnEdit} handleOnDelete={handleOnDelete} daysOld={daysOld} />;
    } else {
      daysOld = calcDaysOld(task.dateAdded, new Date().toDateString());
      var daysPastDue = calcDaysOld(task.dueDate, new Date().toDateString());

      return <HigherLevelTask key={task.taskID} id={task.taskID} taskName={task.taskName} description={task.description} dueDate={task.dueDate} level={level} handleOnEdit={handleOnEdit} handleOnDelete={handleOnDelete} daysOld={daysOld} daysPastDue={daysPastDue} />;
    }
  });

  return (
    <div>
      { tasks }
    </div>
  );
};

export default TaskList;
