import { Box } from 'grid-styled';
import { rgba } from 'polished';
import theme from 'config/theme';

const getColor = (type) => {
  switch (type) {
    case 'success':
      return theme.colors.accent2;
    case 'error':
      return theme.colors.accent1;
    case 'notice':
    default:
      return theme.colors.primary2;
  }
};

const Alert = Box.extend`
  border: 1px solid ${props => getColor(props.type)};
  padding: 16px;
  background-color: ${props => rgba(getColor(props.type), 0.1)};
  border-radius: 10px;
`;

export default Alert;
