import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isPending, hasFailed } from 'redux-saga-thunk';
import { DELETE_TASK, deleteTask, updateTask, UPDATE_TASK } from 'store/tasks/actions';
import TaskCard from 'components/TaskCard';

@connect(state => ({
  deleteInProgress: isPending(state, DELETE_TASK),
  deleteHasFailed: hasFailed(state, DELETE_TASK),
  updateInProgress: isPending(state, UPDATE_TASK),
  updateHasFailed: hasFailed(state, UPDATE_TASK),
}), {
  deleteTask,
  updateTask,
}, (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
  deleteTask: () => dispatchProps.deleteTask(ownProps.id, ownProps.spaceId),
  updateTask: payload => dispatchProps.updateTask(ownProps.id, payload),
}))
export default class TaskCardContainer extends Component {
  static propTypes = {
    updateTask: PropTypes.func.isRequired,
    done: PropTypes.bool,
  };

  state = {
    expanded: false,
  };

  toggleExpand = () => {
    this.setState({
      expanded: !this.state.expanded,
    });
  };

  toggleDone = () => {
    this.props.updateTask({
      done: !this.props.done,
    });
  };

  render() {
    return (
      <TaskCard
        {...this.props}
        {...this.state}
        toggleExpand={this.toggleExpand}
        toggleDone={this.toggleDone}
      />
    );
  }
}
