import React, { Component } from 'react';
import LeftPane from 'components/LeftPane';

export default class LeftPaneContainer extends Component {
  state = {
    dropdownIsOpen: false,
  };

  toggleDropdown = () => {
    this.setState({
      dropdownIsOpen: !this.state.dropdownIsOpen,
    });
  };

  render() {
    return (
      <LeftPane
        {...this.props}
        {...this.state}
        toggleDropdown={this.toggleDropdown}
      />
    );
  }
}
