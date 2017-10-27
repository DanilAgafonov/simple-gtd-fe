import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grid-styled';
import Alert from 'components/Alert';
import TextField from 'components/TextField';
import Button from 'components/Button';
import HorizontalLoader from 'components/HorizontalLoader';
import Link from 'components/Link';

const LoginForm = ({
  onChangeEmail,
  onChangePassword,
  email,
  password,
  message,
  onSubmit,
  loginLoadingIsPending,
}) => (
  <div>
    {message ? (
      <Alert mb="1em">{message}</Alert>
    ) : null}
    <form onSubmit={onSubmit}>
      <Box mb="1em">
        <TextField value={email} type="email" onChange={onChangeEmail} label="E-mail" name="email" />
      </Box>
      <Box mb="1em">
        <TextField value={password} type="password" onChange={onChangePassword} label="Password" name="password" />
      </Box>

      {loginLoadingIsPending ? (
        <HorizontalLoader />
      ) : (
        <Box>
          <Button primary type="submit">Log in</Button>
          <Link to="/registration">Register</Link>
        </Box>
      )}
    </form>
  </div>
);

LoginForm.propTypes = {
  message: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  loginLoadingIsPending: PropTypes.bool.isRequired,
};

export default LoginForm;
