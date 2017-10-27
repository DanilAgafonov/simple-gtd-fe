import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isPending, hasFailed } from 'redux-saga-thunk';
import { LOAD_SPACES, loadSpaces } from 'store/spaces/actions';
import { getSpaces } from 'store/spaces/selectors';
import SpaceList from 'components/SpaceList';

@connect(state => ({
  spaces: getSpaces(state),
  isPending: isPending(state, LOAD_SPACES),
  hasFailed: hasFailed(state, LOAD_SPACES),
}), {
  loadSpaces,
})
export default class SpaceListContainer extends Component {
  static propTypes = {
    loadSpaces: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.loadSpaces();
  }

  render() {
    return (
      <SpaceList
        {...this.props}
      />
    );
  }
}
