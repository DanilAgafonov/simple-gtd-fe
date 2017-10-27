import React from 'react';
import CreateTaskFormContainer from 'containers/CreateTaskFormContainer';
import TasksListContainer from 'containers/TasksListContainer';

const SpaceScreen = () => (
  <div>
    <div>Inbox</div>
    <CreateTaskFormContainer />
    <TasksListContainer />
  </div>
);

export default SpaceScreen;
