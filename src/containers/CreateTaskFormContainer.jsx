import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isPending, hasFailed } from 'redux-saga-thunk';
import { createTask, CREATE_TASK } from 'store/tasks/actions';
import CreateTaskForm from 'components/CreateTaskForm';

@connect(state => ({
  isPending: isPending(state, CREATE_TASK),
  hasFailed: hasFailed(state, CREATE_TASK),
}), {
  createTask,
})
export default class CreateTaskFormContainer extends Component {
  static propTypes = {
    createTask: PropTypes.func.isRequired,
  };

  state = {
    text: '',
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
      <CreateTaskForm
        {...this.props}
        {...this.state}
        onSubmit={this.handleSubmit}
        onChangeText={this.handleChangeText}
      />
    );
  }
}
