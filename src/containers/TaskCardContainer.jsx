import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isPending, hasFailed } from 'redux-saga-thunk';
import { DELETE_TASK, deleteTask } from 'store/tasks/actions';
import TaskCard from 'components/TaskCard';

@connect(state => ({
  deleteInProgress: isPending(state, DELETE_TASK),
  deleteHasFailed: hasFailed(state, DELETE_TASK),
}), {
  deleteTask,
}, (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
  deleteTask: () => dispatchProps.deleteTask(ownProps.id, ownProps.spaceId),
}))
export default class TaskCardContainer extends Component {
  /* static propTypes = {
    loadSpaces: PropTypes.func.isRequired,
  }; */

  state = {
    expanded: false,
  };

  toggleExpand = () => {
    this.setState({
      expanded: !this.state.expanded,
    });
  };

  render() {
    return (
      <TaskCard
        {...this.props}
        {...this.state}
        toggleExpand={this.toggleExpand}
      />
    );
  }
}
