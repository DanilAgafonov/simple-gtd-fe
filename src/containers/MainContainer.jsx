import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isPending, hasFailed, isDone } from 'redux-saga-thunk';
import { GET_CURRENT_USER, getCurrentUser } from 'store/session/actions';
import MainLayout from 'components/MainLayout';

@connect(state => ({
  userLoadingIsPending: isPending(state, GET_CURRENT_USER),
  userLoadingHasFailed: hasFailed(state, GET_CURRENT_USER),
  userLoadingIsDone: isDone(state, GET_CURRENT_USER),
}), {
  getCurrentUser,
})
export default class MainContainer extends Component {
  static propTypes = {
    getCurrentUser: PropTypes.func.isRequired,
    userLoadingIsDone: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    if (!this.props.userLoadingIsDone) {
      return null;
    }

    return (
      <MainLayout
        {...this.props}
      />
    );
  }
}
