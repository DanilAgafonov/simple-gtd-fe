import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'grid-styled';
import TaskCardContainer from 'containers/TaskCardContainer';

const TasksList = ({ tasks, spaceId }) => (
  <Flex direction="column">
    {tasks.map(task => (
      <Box key={task.id}>
        <TaskCardContainer {...task} spaceId={spaceId} />
      </Box>
    ))}
  </Flex>
);

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  spaceId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default TasksList;
