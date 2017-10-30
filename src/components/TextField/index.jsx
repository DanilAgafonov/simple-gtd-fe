import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { lighten } from 'polished';
import theme from 'config/theme';

const Input = styled.input`
  display: block;
  width: 100%;
  outline: 0;
  background-color: ${props => (props.disabled ? '#f3f3f3' : '#ffffff')};
  border-radius: 10px;
  border: 1px solid ${theme.colors.primary2};
  color: ${theme.colors.primary1};
  min-width: 0px;
  box-shadow: inset 0 0 10px -3px ${lighten(0.2, theme.colors.primary1)};
  font-size: 1em;
  font-family: inherit;
  font-weight: 300;
  padding: 8px;
  box-sizing: border-box;
  
  &:focus {
    border-color: ${theme.colors.primary1};
    box-shadow: inset 0 0 10px -2px ${lighten(0.2, theme.colors.primary1)}, 0 0 10px -3px ${lighten(0.2, theme.colors.primary1)};
  }
  
  &::placeholder {
    color: ${theme.colors.alternateText};
  }
`;

const Container = styled.div``;

const Label = styled.label`
  margin-bottom: 0.4em;
  display: block;
`;

const ErrorMessage = styled.p`
  margin: 0;
  font-size: 0.8em;
  color: ${theme.colors.accent1};
`;

const TextField = ({
  label,
  name,
  value,
  onChange,
  disabled,
  className,
  meta: { error },
  type,
  placeholder,
  inputRef,
}) => (
  <Container>
    {label ? (
      <Label htmlFor={name}>{label}</Label>
    ) : null}
    <Input
      type={type}
      value={value}
      onChange={onChange}
      disabled={disabled}
      id={name}
      className={className}
      placeholder={placeholder}
      innerRef={inputRef}
    />
    {error ? (
      <ErrorMessage>{Array.isArray(error) ? error.join(' ') : error}</ErrorMessage>
    ) : null}
  </Container>
);

TextField.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  inputRef: PropTypes.func,
  disabled: PropTypes.bool,
  label: PropTypes.node,
  className: PropTypes.string,
  meta: PropTypes.shape({
    error: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.string,
    ]),
  }),
  type: PropTypes.string,
};

TextField.defaultProps = {
  disabled: false,
  label: null,
  className: null,
  meta: {},
  type: 'text',
};

export default TextField;
