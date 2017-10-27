import React from 'react';
import { Flex, Box } from 'grid-styled';
import { rgba, darken } from 'polished';
import PlusIcon from 'react-icons/lib/fa/plus';
import SettingsIcon from 'react-icons/lib/fa/sliders';
import PlanIcon from 'react-icons/lib/fa/calendar';
import theme from 'config/theme';
import Button from 'components/Button';
import ButtonLink from 'components/ButtonLink';
import SpacesListContainer from 'containers/SpacesListContainer';

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

const LeftPane = () => (
  <Container>
    <ListWrapper>
      <StaticItems>
        <ButtonLink to="/plan" squared big fullWidth><PlanIcon /> Plan</ButtonLink>
      </StaticItems>
      <SpacesListContainer />
    </ListWrapper>
    <BottomBar>
      <Button squared big><PlusIcon /> Add space</Button>
      <Button squared big><SettingsIcon /></Button>
    </BottomBar>
  </Container>
);

export default LeftPane;
