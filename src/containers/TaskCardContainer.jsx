import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTask, updateTask } from 'store/tasks/actions';
import TaskCard from 'components/TaskCard';

@connect(null, {
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
    deleteTask: PropTypes.func.isRequired,
    done: PropTypes.bool,
  };

  state = {
    expanded: false,
    updateInProgress: false,
    updateHasFailed: false,
    deleteInProgress: false,
    deleteHasFailed: false,
  };

  toggleExpand = () => {
    this.setState({
      expanded: !this.state.expanded,
    });
  };

  toggleDone = () => {
    this.setState({
      updateInProgress: true,
      updateHasFailed: false,
    }, () => {
      this.props.updateTask({
        done: !this.props.done,
      })
        .then(() => {
          this.setState({
            updateInProgress: false,
          });
        })
        .catch(() => {
          this.setState({
            updateInProgress: false,
            updateHasFailed: true,
          });
        });
    });
  };

  deleteTask = () => {
    this.setState({
      deleteInProgress: true,
      deleteHasFailed: false,
    }, () => {
      this.props.deleteTask()
        .then(() => {
          this.setState({
            deleteInProgress: false,
          });
        })
        .catch(() => {
          this.setState({
            deleteInProgress: false,
            deleteHasFailed: true,
          });
        });
    });
  };

  render() {
    return (
      <TaskCard
        {...this.props}
        {...this.state}
        toggleExpand={this.toggleExpand}
        toggleDone={this.toggleDone}
        deleteTask={this.deleteTask}
      />
    );
  }
}
