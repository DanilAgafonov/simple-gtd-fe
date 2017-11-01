import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
`;

const Dropdown = styled.div`
  position: absolute;
  ${(props) => {
    if (props.align === 'right') {
      return 'right: 0;';
    }

    return 'left: 0;';
  }}
  
  background-color: #ffffff;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 0px 30px -5px rgba(0,0,0,0.75);
  z-index: 1;
`;

class EnhancedDropdown extends React.Component {
  static propTypes = {
    close: PropTypes.func.isRequired,
    align: PropTypes.string.isRequired,
    className: PropTypes.string,
    children: PropTypes.node,
    autoClosable: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    children: null,
  };

  componentDidMount() {
    document.addEventListener('click', this.handle, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handle, true);
  }

  getContainer = (ref) => {
    this.container = ref;
  };

  handle = (e) => {
    const { close } = this.props;
    const el = this.container;
    // "true" if click inside dropdown menu, "false" if outside
    const inside = el.contains(e.target);
    if (!inside) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (this.props.autoClosable || !inside) {
      setImmediate(() => {
        close(e);
      });
    }
  };

  render() {
    const {
      align,
      className,
      children,
    } = this.props;

    return (
      <Dropdown align={align} className={className} innerRef={this.getContainer}>
        {children}
      </Dropdown>
    );
  }
}

const DropdownMenu = ({ isOpen, label, children, align, onClick, className, autoClosable }) => (
  <Wrapper>
    {cloneElement(label, {
      onClick,
    })}
    {(() => {
      if (isOpen) {
        return (
          <EnhancedDropdown
            align={align}
            className={className}
            close={onClick}
            autoClosable={autoClosable}
          >
            {children}
          </EnhancedDropdown>
        );
      }

      return null;
    })()}
  </Wrapper>
);

DropdownMenu.propTypes = {
  isOpen: PropTypes.bool,
  label: PropTypes.node.isRequired,
  children: PropTypes.node,
  align: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  autoClosable: PropTypes.bool,
};

DropdownMenu.defaultProps = {
  isOpen: false,
  align: 'left',
  onClick: () => {},
  className: undefined,
  children: null,
  autoClosable: true,
};

export default DropdownMenu;
