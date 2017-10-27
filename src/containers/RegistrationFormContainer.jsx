import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isPending } from 'redux-saga-thunk';
import { REGISTRATION, registration } from 'store/session/actions';
import RegistrationForm from 'components/RegistrationScreen/Form';

@connect(state => ({
  errors: state.session.registrationErrors,
  registrationLoadingIsPending: isPending(state, REGISTRATION),
}), {
  registration,
})
export default class RegistrationFormContainer extends Component {
  static propTypes = {
    registration: PropTypes.func.isRequired,
  };

  state = {
    email: '',
    password: '',
    passwordConfirmation: '',
    firstName: '',
    lastName: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.registration(
      this.state.email,
      this.state.password,
      this.state.passwordConfirmation,
      this.state.firstName,
      this.state.lastName,
    );
  };

  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  handleChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  handleChangePasswordConfirmation = (event) => {
    this.setState({ passwordConfirmation: event.target.value });
  };

  handleChangeFirstName = (event) => {
    this.setState({ firstName: event.target.value });
  };

  handleChangeLastName = (event) => {
    this.setState({ lastName: event.target.value });
  };

  render() {
    return (
      <RegistrationForm
        {...this.props}
        {...this.state}
        onSubmit={this.handleSubmit}
        onChangeEmail={this.handleChangeEmail}
        onChangePassword={this.handleChangePassword}
        onChangePasswordConfirmation={this.handleChangePasswordConfirmation}
        onChangeFirstName={this.handleChangeFirstName}
        onChangeLastName={this.handleChangeLastName}
      />
    );
  }
}
