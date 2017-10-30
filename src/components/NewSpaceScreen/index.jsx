import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grid-styled';
import styled from 'styled-components';
import HorizontalLoader from 'components/HorizontalLoader';
import Button from 'components/Button';
import TextField from 'components/TextField';

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

const StyledTextField = styled(TextField)`
  box-shadow: none;
  border: none;
  padding: 0;
  margin: 0.67em 0;
  font-size: 2em;
  font-weight: bold;
  
  &:focus {
    box-shadow: none;
  }
`;

const NewSpaceScreen = ({
  createSpace,
  isPending,
  hasFailed,
  onChangeName,
  onSubmit,
  inputRef,
  name,
}) => (
  <Wrapper>
    <SpaceHeader>
      {isPending ? (
        <h1>{name}</h1>
      ) : (
        <form onSubmit={onSubmit}>
          <StyledTextField value={name} onChange={onChangeName} inputRef={inputRef} placeholder="Enter space name here" />
        </form>
      )}
      {isPending ? (<HorizontalLoader />) : null}
      {hasFailed ? (
        <Message>
          <p>Error occurred while creating space.</p>
          <Button onClick={createSpace}>Try again</Button>
        </Message>
        ) : null}
    </SpaceHeader>
  </Wrapper>
);

NewSpaceScreen.propTypes = {
  createSpace: PropTypes.func.isRequired,
  onChangeName: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  hasFailed: PropTypes.bool.isRequired,
  isPending: PropTypes.bool.isRequired,
};

export default NewSpaceScreen;
