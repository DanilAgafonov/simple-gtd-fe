import React from 'react';
import { Flex, Box } from 'grid-styled';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import HorizontalLoader from 'components/HorizontalLoader';
import Button from 'components/Button';
import ButtonLink from 'components/ButtonLink';
import theme from 'config/theme';

const Container = Flex.extend.attrs({
  justify: 'center',
})`
  padding: 1em;
`;

const Message = Box.extend`
  text-align: center;
`;

const Label = Box.extend`
  border-radius: 20px;
  background-color: ${theme.colors.accent2};
  padding: 0.4em 0.5em 0.2em;
  font-size: 0.8em;
  color: #fff;
  font-weight: 600;
`;

const StyledButtonLink = ButtonLink.extend`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
`;


// eslint-disable-next-line react/prop-types
const LinkToSpace = ({ children, to }) => (
  <Route path={to} exact>
    {({ match }) => (
      <StyledButtonLink to={to} squared big fullWidth active={match}>{children}</StyledButtonLink>
    )}
  </Route>
);

const SpaceList = ({ loadSpaces, spaces, isPending, hasFailed }) => {
  if (isPending) {
    return (
      <Container>
        <HorizontalLoader />
      </Container>
    );
  }

  if (hasFailed) {
    return (
      <Container>
        <Message>
          <p>Error occurred while loading spaces.</p>
          <Button onClick={loadSpaces}>Try again</Button>
        </Message>
      </Container>
    );
  }

  if (spaces.length === 0) {
    return (
      <Container>
        <Message>
          <p>There are no spaces</p>
        </Message>
      </Container>
    );
  }

  return spaces.map(space => (
    <LinkToSpace
      to={`/spaces/${space.id}`}
      key={space.id}
    >
      <div>{space.name}</div> <Label>{space.tasks.length}</Label>
    </LinkToSpace>
  ));
};

SpaceList.propTypes = {
  loadSpaces: PropTypes.func.isRequired,
  spaces: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  isPending: PropTypes.bool.isRequired,
  hasFailed: PropTypes.bool.isRequired,
};

export default SpaceList;
