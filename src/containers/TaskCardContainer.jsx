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
    text: PropTypes.string.isRequired,
  };

  state = {
    expanded: false,
    updateInProgress: false,
    updateHasFailed: false,
    deleteInProgress: false,
    deleteHasFailed: false,
    editableText: '',
    isTextEditing: false,
  };

  toggleExpand = () => {
    this.setState({
      expanded: !this.state.expanded,
    });
  };

  toggleDone = () => {
    this.updateTask({
      done: !this.props.done,
    });
  };

  updateTask = data => new Promise((resolve, reject) => {
    this.setState({
      updateInProgress: true,
      updateHasFailed: false,
    }, () => {
      this.props.updateTask(data)
        .then(() => {
          this.setState({
            updateInProgress: false,
          }, () => { resolve(); });
        })
        .catch(() => {
          this.setState({
            updateInProgress: false,
            updateHasFailed: true,
          }, () => { reject(); });
        });
    });
  });

  deleteTask = () => {
    this.setState({
      deleteInProgress: true,
      deleteHasFailed: false,
    }, () => {
      this.props.deleteTask()
        .catch(() => {
          this.setState({
            deleteInProgress: false,
            deleteHasFailed: true,
          });
        });
    });
  };

  startEditText = (text = this.props.text) => {
    this.setState({
      isTextEditing: true,
    }, () => {
      this.textInput.focus();
      this.setState({
        editableText: text,
      });
    });
  };

  endEditText = () => {
    this.setState({
      isTextEditing: false,
      editableText: '',
    });
  };

  bindTextInputRef = (input) => {
    this.textInput = input;
  };

  handleChangeText = (event) => {
    this.setState({
      editableText: event.target.value,
    });
  };

  handleSubmitText = (event) => {
    event.preventDefault();
    const text = this.state.editableText;
    this.updateTask({
      text,
    })
      .then(() => {
        this.endEditText();
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
        textInputRef={this.bindTextInputRef}
        startEditText={this.startEditText}
        endEditText={this.endEditText}
        onChangeText={this.handleChangeText}
        onSubmitText={this.handleSubmitText}
      />
    );
  }
}
