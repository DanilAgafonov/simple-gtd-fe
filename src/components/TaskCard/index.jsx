import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';
import ExpandIcon from 'react-icons/lib/fa/chevron-down';
import CollapseIcon from 'react-icons/lib/fa/chevron-up';
import TrashIcon from 'react-icons/lib/fa/trash';
import { rgba, darken } from 'polished';
import theme from 'config/theme';
import Button from 'components/Button';
import TextField from 'components/TextField';
import HorizontalLoader from 'components/HorizontalLoader';

const Container = styled(({ expanded, ...rest }) => <Box {...rest} />)`
  box-shadow: ${props => (props.expanded ? `0 0 60px 0 ${rgba(darken(0.1, theme.colors.primary2), 0.4)}` : 'none')};
  border-bottom: 1px solid #eee;
  padding: 0.5em 1em;
`;

const Checkbox = styled.input.attrs({
  type: 'checkbox',
})`
  width: 1.5em;
  height: 1.5em;
  margin: 0 1em 0 0;
  flex: none;
`;

const ExpandButton = Button.extend`
   background: none;
   flex: none;
`;

const NameInput = styled(TextField)`
  box-shadow: none;
  border: none;
  padding: 0;
  font-weight: bold;
  border-radius: 0;
  width: 100%;
  
  &:focus {
    box-shadow: none;
  }
`;

const TextForm = styled.form`
  display: block;
  flex: 1 1 auto;
`;

const TaskCard = ({
  done,
  text,
  expanded,
  toggleExpand,
  deleteTask,
  toggleDone,
  updateInProgress,
  startEditText,
  endEditText,
  isTextEditing,
  editableText,
  onChangeText,
  textInputRef,
  onSubmitText,
}) => (
  <Container expanded={expanded}>
    <Flex align="center">
      <Flex align="center" flex="1 1 auto">
        <Checkbox
          checked={done || false}
          onChange={toggleDone}
          disabled={updateInProgress}
        />
        {isTextEditing ? (
          <TextForm onSubmit={onSubmitText}>
            <NameInput
              value={editableText}
              onChange={onChangeText}
              inputRef={textInputRef}
              placeholder="Enter task name here"
              onBlur={endEditText}
            />
          </TextForm>
        ) : (
          // eslint-disable-next-line jsx-a11y/no-static-element-interactions
          <strong onClick={() => startEditText()}>{text}</strong>
        )}
        {updateInProgress ? <HorizontalLoader /> : null}
      </Flex>
      <ExpandButton onClick={toggleExpand}>
        {expanded ? <CollapseIcon /> : <ExpandIcon />}
      </ExpandButton>
    </Flex>
    {expanded ? (
      <Box my="1em">
        <Button primary onClick={deleteTask}><TrashIcon /> Delete</Button>
      </Box>
    ) : null}
  </Container>
);

TaskCard.propTypes = {
  text: PropTypes.string.isRequired,
  expanded: PropTypes.bool.isRequired,
  toggleExpand: PropTypes.func.isRequired,
  toggleDone: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  updateInProgress: PropTypes.bool.isRequired,
  done: PropTypes.bool,
  startEditText: PropTypes.func.isRequired,
  endEditText: PropTypes.func.isRequired,
  isTextEditing: PropTypes.bool.isRequired,
  editableText: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  textInputRef: PropTypes.func.isRequired,
  onSubmitText: PropTypes.func.isRequired,
};

export default TaskCard;
