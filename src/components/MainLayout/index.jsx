import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'grid-styled';
import { Switch, Route, Redirect } from 'react-router-dom';
import PageNotFound from 'components/PageNotFound';
import HorizontalLoader from 'components/HorizontalLoader';
import Button from 'components/Button';
import Header from 'components/Header';

const Container = Flex.extend.attrs({
  direction: 'column',
  justify: 'center',
  align: 'center',
})`
  min-height: 100vh;
  padding: 1em;
`;

const ContentContainer = Flex.extend`
  flex: 1 1 auto;
`;

const MainContainer = Flex.extend.attrs({
  direction: 'column',
})`
  height: 100vh;
`;

const ErrorMessage = Box.extend`
  text-align: center;
`;

const MainLayout = ({
  userLoadingIsPending,
  userLoadingHasFailed,
  getCurrentUser,
}) => {
  if (userLoadingIsPending) {
    return (
      <Container>
        <HorizontalLoader />
      </Container>
    );
  }

  if (userLoadingHasFailed) {
    return (
      <Container>
        <ErrorMessage>
          <p>Error occurred while loading information about user.</p>
          <Button onClick={getCurrentUser}>Try again</Button>
        </ErrorMessage>
      </Container>
    );
  }

  return (
    <MainContainer>
      <Box flex="none">
        <Header />
      </Box>
      <ContentContainer>
        <Box flex="1 1 30%">
          1
        </Box>
        <Box flex="1 1 70%">
          <Redirect from="/" to="/inbox" />
          <Switch>
            <Route
              path="/inbox"
              exact
              render={() => (1)}
            />
            <Route
              component={PageNotFound}
            />
          </Switch>
        </Box>
      </ContentContainer>
    </MainContainer>
  );
};

MainLayout.propTypes = {
  userLoadingIsPending: PropTypes.bool.isRequired,
  userLoadingHasFailed: PropTypes.bool.isRequired,
  getCurrentUser: PropTypes.func.isRequired,
};

export default MainLayout;
