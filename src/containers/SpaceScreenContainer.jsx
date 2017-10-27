import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isPending, hasFailed } from 'redux-saga-thunk';
import { LOAD_SPACE, loadSpace } from 'store/spaces/actions';
import { getSpace } from 'store/spaces/selectors';
import SpaceScreen from 'components/SpaceScreen';

@connect((state, ownProps) => ({
  space: getSpace(state, ownProps.match.params.id),
  isPending: isPending(state, LOAD_SPACE),
  hasFailed: hasFailed(state, LOAD_SPACE),
}), {
  loadSpace,
})
export default class SpaceScreenContainer extends Component {
  static propTypes = {
    loadSpace: PropTypes.func.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  };

  componentDidMount() {
    this.props.loadSpace(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.loadSpace(nextProps.match.params.id);
    }
  }

  render() {
    return (
      <SpaceScreen
        {...this.props}
      />
    );
  }
}
