import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const LoaderWrapper = styled.div`
  display: flex;
  width: ${props => (typeof props.size === 'number' ? props.size : 4)}em;
  justify-content: space-between;
  text-align: center;
  height: 1.5em;
  align-items: center;
`;

const bouncedelay = keyframes`
  0%, 80%, 100% { 
    transform: scale(0);
  }
  40% { 
    -webkit-transform: scale(1.0);
  }
`;

const LoaderElement = styled.div`
  width: ${props => (typeof props.size === 'number' ? props.size : 1)}em;
  height: ${props => (typeof props.size === 'number' ? props.size : 1)}em;
  background-color: currentColor;
  border-radius: 100%;
  animation: ${bouncedelay} 1.4s infinite ease-in-out both;
`;

const Bounce1 = LoaderElement.extend`
  animation-delay: -0.32s;
`;

const Bounce2 = LoaderElement.extend`
  animation-delay: -0.16s;
`;

const Bounce3 = LoaderElement;

const HorizontalLoader = ({ size }) => (
  <LoaderWrapper size={(size * 3) + 1}>
    <Bounce1 size={size} />
    <Bounce2 size={size} />
    <Bounce3 size={size} />
  </LoaderWrapper>
);

HorizontalLoader.propTypes = {
  size: PropTypes.number,
};

HorizontalLoader.defaultProps = {
  size: 1,
};

export default HorizontalLoader;
