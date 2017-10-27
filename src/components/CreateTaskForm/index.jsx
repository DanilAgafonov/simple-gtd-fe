import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grid-styled';
import TextField from 'components/TextField';
import Button from 'components/Button';

const CreateTaskForm = ({ text, onSubmit, onChangeText }) => (
  <form onSubmit={onSubmit}>
    <Box mb="1em">
      <TextField value={text} type="text" label="Text" name="text" onChange={onChangeText} />
    </Box>

    <Box>
      <Button primary type="submit">Create</Button>
    </Box>
  </form>
);

CreateTaskForm.propTypes = {
  text: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChangeText: PropTypes.func.isRequired,
};


export default CreateTaskForm;
