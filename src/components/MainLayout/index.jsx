import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'grid-styled';
import { Switch, Route } from 'react-router-dom';
import PageNotFound from 'components/PageNotFound';
import HorizontalLoader from 'components/HorizontalLoader';
import Button from 'components/Button';
import LeftPaneContainer from 'containers/LeftPaneContainer';
import EmptyScreen from 'components/EmptyScreen';
import SpaceScreenContainer from 'containers/SpaceScreenContainer';
import NewSpaceScreenContainer from 'containers/NewSpaceScreenContainer';
import LogoutContainer from 'containers/LogoutContainer';

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

const LeftPaneWrapper = Box.extend.attrs({
  flex: '1 1 30%',
})`
  border-right: 1px solid #eeeeee;
`;

const RightPaneWrapper = Box.extend.attrs({
  flex: '1 1 70%',
})``;

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
      <ContentContainer>
        <LeftPaneWrapper>
          <LeftPaneContainer />
        </LeftPaneWrapper>
        <RightPaneWrapper>
          <Switch>
            <Route
              path="/"
              exact
              component={EmptyScreen}
            />
            <Route
              path="/spaces/new"
              exact
              component={NewSpaceScreenContainer}
            />
            <Route
              path="/spaces/:id"
              exact
              component={SpaceScreenContainer}
            />
            <Route
              path="/logout"
              exact
              component={LogoutContainer}
            />
            <Route
              component={PageNotFound}
            />
          </Switch>
        </RightPaneWrapper>
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
