import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'grid-styled';
import DeleteIcon from 'react-icons/lib/fa/trash';
import HorizontalLoader from 'components/HorizontalLoader';
import Button from 'components/Button';
import CreateTaskFormContainer from 'containers/CreateTaskFormContainer';
import TasksListContainer from 'containers/TasksListContainer';

const Container = Flex.extend.attrs({
  justify: 'center',
})`
  padding: 1em;
`;

const Wrapper = Box.extend`
  height: 100%;
  overflow-y: auto;
`;

const SpaceHeader = Box.extend`
  margin: 1em;
`;

const Message = Box.extend`
  text-align: center;
`;

const SpaceScreen = ({
  space,
  loadSpace,
  isPending,
  hasFailed,
  deleteSpace,
}) => {
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
          <p>Error occurred while loading space.</p>
          <Button onClick={loadSpace}>Try again</Button>
        </Message>
      </Container>
    );
  }

  if (!space) {
    return null;
  }

  return (
    <Wrapper>
      <SpaceHeader>
        <Flex justify="space-between" align="center">
          <h1>{space.name}</h1>
          <Button onClick={deleteSpace}><DeleteIcon /></Button>
        </Flex>
        <CreateTaskFormContainer spaceId={space.id} />
      </SpaceHeader>
      <TasksListContainer tasks={space.tasks} />
    </Wrapper>
  );
};

SpaceScreen.propTypes = {
  space: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    tasks: PropTypes.array.isRequired,
  }),
  loadSpace: PropTypes.func.isRequired,
  deleteSpace: PropTypes.func.isRequired,
  hasFailed: PropTypes.bool.isRequired,
  isPending: PropTypes.bool.isRequired,
};

export default SpaceScreen;
