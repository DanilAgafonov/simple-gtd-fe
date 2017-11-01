import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from 'store/session/actions';

@connect(null, { logout })
export default class LogoutContainer extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.logout();
  }

  render() {
    return null;
  }
}
