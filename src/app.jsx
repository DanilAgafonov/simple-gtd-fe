/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { ThemeProvider, injectGlobal } from 'styled-components';
import { Helmet } from 'react-helmet';
import MainContainer from 'containers/MainContainer';
import OnlyForUnauthenticatedRoute from 'components/OnlyForUnauthenticatedRoute';
import LoginScreen from 'components/LoginScreen';
import RegistrationScreen from 'components/RegistrationScreen';

import theme from 'config/theme';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  body {
    margin: 0;
    color: ${theme.colors.text};
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    font-size: 1rem;
    font-weight: 400;
  }
`;

@withRouter
@connect(state => ({
  isAuthenticated: state.session.isAuthenticated,
}))
export default class SharedContainer extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
  };

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return [
      <Helmet
        titleTemplate="%s :: Simple GTD"
        key="helmet"
      >
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Helmet>,
      <ThemeProvider theme={theme} key="theme-provider">
        <Switch>
          <OnlyForUnauthenticatedRoute
            path="/login"
            exact
            component={LoginScreen}
          />
          <OnlyForUnauthenticatedRoute
            path="/registration"
            exact
            component={RegistrationScreen}
          />
          <Route
            render={() => (
              this.props.isAuthenticated ? (
                <MainContainer />
              ) : (
                <Redirect
                  to={{
                    pathname: '/login',
                  }}
                />
              )
            )}
          />
        </Switch>
      </ThemeProvider>,
    ];
  }
}
