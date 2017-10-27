import React from 'react';
import PropTypes from 'prop-types';
import List, { ListItem, ListItemText } from 'components/List';

const TasksList = ({ tasks }) => (
  <List>
    {tasks.map(task => (
      <ListItem key={task.id}>
        <ListItemText
          primary={task.text}
        />
      </ListItem>
    ))}
  </List>
);

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
};

export default TasksList;
