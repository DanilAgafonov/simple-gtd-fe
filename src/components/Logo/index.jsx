import React from 'react';
import styled from 'styled-components';
import theme from 'config/theme';

const StyledLogo = styled.span`
  color: ${theme.colors.accent2};
  font-size: 2em;
  line-height: 1em;
  font-weight: 400;
`;

export default () => (
  <StyledLogo>
    Simple GTD
  </StyledLogo>
);
