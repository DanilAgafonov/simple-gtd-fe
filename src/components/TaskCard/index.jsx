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
`;

const ExpandButton = Button.extend`
   background: none;
`;

const TaskCard = ({
  done,
  text,
  expanded,
  toggleExpand,
  deleteTask,
  toggleDone,
  updateInProgress,
}) => (
  <Container expanded={expanded}>
    <Flex justify="space-between" align="center">
      <Flex align="center">
        <Checkbox
          checked={done || false}
          onChange={toggleDone}
          disabled={updateInProgress}
        />
        <strong>{text}</strong>
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
};

export default TaskCard;
