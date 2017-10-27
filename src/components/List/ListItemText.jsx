import React from 'react';
import PropTypes from 'prop-types';
import MutedText from 'components/MutedText';

const ListItemText = ({ primary, secondary }) => {
  const elements = [
    <strong key="primary">{primary}</strong>,
  ];

  if (secondary) {
    elements.push(<br key="br" />);
    elements.push(<MutedText key="secondary">{secondary}</MutedText>);
  }

  return elements;
};

ListItemText.propTypes = {
  primary: PropTypes.string.isRequired,
  secondary: PropTypes.node,
};

ListItemText.defaultProps = {
  secondary: null,
};

export default ListItemText;
