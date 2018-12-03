import React from 'react';
import LowerLevelTask from '../../components/tasks/LowerLevelTask';
import HigherLevelTask from '../../components/tasks/HigherLevelTask';
import ArchivedTask from '../../components/tasks/ArchivedTask';

const TaskList = ({ taskList, handleOnEdit, handleOnDelete, archiveCompletedTask, handleEditfn }) => {

  let tasks = taskList.map((task) => {
    if (task.completed === true) {
      return <ArchivedTask key={task._id} id={task._id} taskName={task.taskTitle} description={task.taskDescription} dateCompleted={task.dateCompleted} level={1}/>;
    } else if (task.level <= 3 || task.level === undefined) {
      return <LowerLevelTask key={task._id} id={task._id} taskName={task.taskTitle} description={task.taskDescription} dueDate={task.dueDate || undefined} dateAdded={task.dateAdded} level={task.level || 1} handleOnEdit={handleOnEdit} handleOnDelete={handleOnDelete} daysOld={task.daysOld || 0} archiveCompletedTask={archiveCompletedTask} handleEditfn={handleEditfn}/>;
    } else {
      return <HigherLevelTask key={task._id} id={task._id} taskName={task.taskTitle} description={task.taskDescription} dueDate={task.dueDate} level={task.level} handleOnEdit={handleOnEdit} handleOnDelete={handleOnDelete} daysOld={task.daysOld} daysPastDue={task.daysPastDue} archiveCompletedTask={archiveCompletedTask} handleEditfn={handleEditfn}/>;
    }
  });

  return (
      <div>{ tasks }</div>
  );
};

export default TaskList;
