import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from 'store/session/actions';
import LoginForm from 'components/LoginScreen/Form';

@connect(state => ({
  message: state.session.message,
}), {
  login,
})
export default class LoginFormContainer extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
  };

  state = {
    email: '',
    password: '',
  };

  componentDidMount() {
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.login(this.state.email, this.state.password);
  };

  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  handleChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <LoginForm
        {...this.props}
        {...this.state}
        onSubmit={this.handleSubmit}
        onChangeEmail={this.handleChangeEmail}
        onChangePassword={this.handleChangePassword}
      />
    );
  }
}
