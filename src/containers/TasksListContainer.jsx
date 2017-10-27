import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isPending, hasFailed } from 'redux-saga-thunk';
import CreateTaskForm from 'components/CreateTaskForm';

@connect(state => ({
  tasks,
}), {
    createTask,
  })
export default class TaskListContainer extends Component {
  static propTypes = {
    createTask: PropTypes.func.isRequired,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createTask(this.state.text);
  };

  handleChangeText = (event) => {
    this.setState({ text: event.target.value });
  };

  render() {
    return (
      <TasksList
        {...this.props}
        onSubmit={this.handleSubmit}
        onChangeText={this.handleChangeText}
      />
    );
  }
}
