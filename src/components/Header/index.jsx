import React from 'react';
import { Box } from 'grid-styled';
import theme from 'config/theme';

const Container = Box.extend`
  height: 50px;
  background-color: ${theme.colors.primary1};
`;

const Header = () => (
  <Container />
);

export default Header;
