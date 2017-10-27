import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import TasksList from 'components/TasksList';

// eslint-disable-next-line react/prefer-stateless-function
export default class TaskListContainer extends Component {
  render() {
    return (
      <TasksList
        {...this.props}
      />
    );
  }
}
