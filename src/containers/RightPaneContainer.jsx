import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { isPending, hasFailed } from 'redux-saga-thunk';
// import { GET_CURRENT_USER, getCurrentUser } from 'store/session/actions';
import RightPane from 'components/RightPane';

/* @connect(state => ({
  // userLoadingIsPending: isPending(state, GET_CURRENT_USER),
  // userLoadingHasFailed: hasFailed(state, GET_CURRENT_USER),
})) */
// eslint-disable-next-line
export default class RightPaneContainer extends Component {
  render() {
    return (
      <RightPane
        {...this.props}
      />
    );
  }
}
