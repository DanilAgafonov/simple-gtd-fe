import React from 'react';
import styled from 'styled-components';
import { Box } from 'grid-styled';
import { darken, lighten } from 'polished';
import theme from 'config/theme';

const BaseElement = Box.withComponent('button');

const BaseButton = (props) => {
  const next = { ...props };
  delete next.big;
  delete next.squared;
  delete next.fullWidth;

  return (
    <BaseElement {...next} />
  );
};

const Button = styled(BaseButton)`
  text-decoration: none;
  outline: 0;
  border: none;
  border-radius: ${props => (props.squared ? '0' : '50px')};
  color: ${(props) => {
    if (props.primary) {
      return props.disabled ? '#f3f3f3' : '#ffffff';
    }
    return props.disabled ? '#cccccc' : theme.colors.primary1;
  }};
  background-color: ${(props) => {
    if (props.primary) {
      return props.disabled ? lighten(0.3, theme.colors.accent1) : theme.colors.accent1;
    }
    return props.disabled ? darken(0.03, '#ffffff') : darken(0.05, '#ffffff');
  }};
  box-shadow: ${props => (props.primary ? `0 0 10px 0 ${theme.colors.accent1}` : 'none')};
  padding: ${props => (props.big ? '1em 2em' : '0.5em 1em')};
  font-size: 1em;
  font-weight: ${props => (props.big ? 400 : 300)};
  font-family: inherit;
  line-height: 1em;
  display: ${props => (props.fullWidth ? 'block' : 'inline-block')};
  
  ${props => (props.disabled ? '' : `
    &:hover,
    &:focus {
      background-color: ${darken(0.2, (props.primary ? theme.colors.accent1 : '#ffffff'))};
      color: ${props.primary ? '#ffffff' : theme.colors.primary1};
    }
  `)}
`;

export default Button;
