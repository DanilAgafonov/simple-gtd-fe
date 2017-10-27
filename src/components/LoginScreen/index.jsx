import React from 'react';
import { Flex, Box } from 'grid-styled';
import Card from 'components/Card';
import LoginFormContainer from 'containers/LoginFormContainer';
import Logo from 'components/Logo';
import theme from 'config/theme';

const Container = Flex.extend.attrs({
  direction: 'column',
  justify: 'center',
  align: 'center',
})`
  min-height: 100vh;
  padding: 1em;
  background-color: ${theme.colors.primary1};
`;

const LoginCard = Card.extend`
  max-width: 25em;
  width: 100%;
  padding: 1em;
`;

const LogoContainer = Box.extend`
  text-align: center;
  margin-bottom: 1em;
`;

const LoginScreen = () => (
  <Container>
    <LogoContainer>
      <Logo />
    </LogoContainer>
    <LoginCard>
      <LoginFormContainer />
    </LoginCard>
  </Container>
);

export default LoginScreen;
