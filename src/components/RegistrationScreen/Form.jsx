import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grid-styled';
import Alert from 'components/Alert';
import TextField from 'components/TextField';
import Button from 'components/Button';
import HorizontalLoader from 'components/HorizontalLoader';
import Link from 'components/Link';

const RegistrationForm = ({
  onChangeEmail,
  onChangePassword,
  onChangePasswordConfirmation,
  email,
  password,
  passwordConfirmation,
  errors,
  onSubmit,
  registrationLoadingIsPending,
}) => (
  <div>
    {typeof errors === 'string' ? (
      <Alert type="error" mb="1em">{errors}</Alert>
    ) : null}
    <form onSubmit={onSubmit}>
      <Box mb="1em">
        <TextField
          value={email}
          type="email"
          onChange={onChangeEmail}
          label="E-mail"
          name="email"
          meta={{
            error: errors && typeof errors === 'object' ? errors.email : undefined,
          }}
        />
      </Box>
      <Box mb="1em">
        <TextField
          value={password}
          type="password"
          onChange={onChangePassword}
          label="Password"
          name="password"
          meta={{
            error: errors && typeof errors === 'object' ? errors.password : undefined,
          }}
        />
      </Box>
      <Box mb="1em">
        <TextField
          value={passwordConfirmation}
          type="password"
          onChange={onChangePasswordConfirmation}
          label="Password confirmation"
          name="password_confirmation"
        />
      </Box>
      {registrationLoadingIsPending ? (
        <HorizontalLoader />
      ) : <Box>
        <Button primary type="submit">Register</Button>
        <Link to="/login">Log in</Link>
      </Box>}
    </form>
  </div>
);

RegistrationForm.propTypes = {
  errors: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      email: PropTypes.string,
      password: PropTypes.string,
    }),
  ]),
  onSubmit: PropTypes.func.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  onChangePasswordConfirmation: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordConfirmation: PropTypes.string.isRequired,
  registrationLoadingIsPending: PropTypes.bool.isRequired,
};

export default RegistrationForm;
