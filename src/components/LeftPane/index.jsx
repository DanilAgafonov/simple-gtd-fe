import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'grid-styled';
import { rgba, darken } from 'polished';
import styled from 'styled-components';
import PlusIcon from 'react-icons/lib/fa/plus';
import SettingsIcon from 'react-icons/lib/fa/sliders';
import PlanIcon from 'react-icons/lib/fa/calendar';
import theme from 'config/theme';
import Button from 'components/Button';
import ButtonLink from 'components/ButtonLink';
import SpacesListContainer from 'containers/SpacesListContainer';
import DropdownMenu from 'components/DropdownMenu/index';

const Container = Flex.extend.attrs({
  direction: 'column',
})`
  height: 100%;
  overflow: hidden;
`;

const ListWrapper = Box.extend.attrs({
  flex: '1 1 auto',
})`
  overflow-y: auto;
`;

const BottomBar = Flex.extend.attrs({
  flex: 'none',
  justify: 'space-between',
})`
  box-shadow: 0 0 60px 0 ${rgba(darken(0.1, theme.colors.primary2), 0.4)};
  border-top: 1px solid #eeeeee;
`;

const StaticItems = Box.extend.attrs({
  mb: '2em',
})``;

const StyledDropdownMenu = styled(DropdownMenu)`
  && {
    position: absolute;
    width: 11em;
    box-shadow: 0px 0px 30px -5px rgba(0,0,0,0.75);
    border-radius: 10px;
    bottom: calc(100% + 0.5em);
  }
`;

const LeftPane = ({ dropdownIsOpen, toggleDropdown }) => (
  <Container>
    <ListWrapper>
      <StaticItems>
        <ButtonLink to="/plan" squared big fullWidth><PlanIcon /> Plan</ButtonLink>
      </StaticItems>
      <SpacesListContainer />
    </ListWrapper>
    <BottomBar>
      <ButtonLink to="/spaces/new" squared big><PlusIcon /> Add space</ButtonLink>
      <StyledDropdownMenu
        label={<Button squared big><SettingsIcon /></Button>}
        align="right"
        isOpen={dropdownIsOpen}
        onClick={toggleDropdown}
      >
        <ButtonLink squared fullWidth big to="/logout">Logout</ButtonLink>
      </StyledDropdownMenu>
    </BottomBar>
  </Container>
);

LeftPane.propTypes = {
  dropdownIsOpen: PropTypes.bool.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
};

export default LeftPane;
