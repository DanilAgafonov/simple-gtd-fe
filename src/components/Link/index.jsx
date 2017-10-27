import React from 'react';
import PropTypes from 'prop-types';
import { Link as ReactRouterLink } from 'react-router-dom';
import styled from 'styled-components';
import { darken } from 'polished';
import theme from 'config/theme';

const StyledA = styled.a`
  text-decoration: none;
  color: ${theme.colors.primary2};
  
  &:hover {
    color: ${darken(0.05, theme.colors.primary2)};
  }
`;

const StyledLink = StyledA.withComponent(ReactRouterLink);

const Link = ({ href, ...props }) => {
  if (typeof href !== 'undefined') {
    return <StyledA href={href} {...props} />;
  }

  return <StyledLink {...props} />;
};

Link.propTypes = {
  href: PropTypes.string,
};

Link.defaultProps = {
  href: undefined,
};

export default Link;
