import React from 'react';
import { Flex, Box } from 'grid-styled';
import PropTypes from 'prop-types';
import HorizontalLoader from 'components/HorizontalLoader';
import Button from 'components/Button';
import ButtonLink from 'components/ButtonLink';

const Container = Flex.extend.attrs({
  justify: 'center',
})`
  padding: 1em;
`;

const Message = Box.extend`
  text-align: center;
`;

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
    <ButtonLink to={`/spaces/${space.id}`} key={space.id} squared big fullWidth>{space.name}</ButtonLink>
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
