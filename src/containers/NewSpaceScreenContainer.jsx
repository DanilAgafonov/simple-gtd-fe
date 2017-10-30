import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isPending, hasFailed, isComplete } from 'redux-saga-thunk';
import { createSpace, CREATE_SPACE } from 'store/spaces/actions';
import NewSpaceScreen from 'components/NewSpaceScreen';

@connect(state => ({
  isPending: isPending(state, CREATE_SPACE),
  hasFailed: hasFailed(state, CREATE_SPACE),
  isComplete: isComplete(state, CREATE_SPACE),
}), {
  createSpace,
})
export default class NewSpaceScreenContainer extends Component {
  static propTypes = {
    createSpace: PropTypes.func.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    name: '',
  };

  handleChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createSpace(this.state.name)
      .then((space) => {
        this.props.history.push(`/spaces/${space.id}`);
      });
  };

  bindInputRef = (input) => {
    this.input = input;
    if (input) {
      this.input.focus();
    }
  };

  render() {
    return (
      <NewSpaceScreen
        {...this.props}
        {...this.state}
        onChangeName={this.handleChangeName}
        inputRef={this.bindInputRef}
        onSubmit={this.handleSubmit}
      />
    );
  }
}
