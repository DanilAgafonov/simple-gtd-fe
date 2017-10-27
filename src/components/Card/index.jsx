import { Box } from 'grid-styled';
import { rgba, darken } from 'polished';
import theme from 'config/theme';

const Card = Box.extend`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 60px 0 ${rgba(darken(0.1, theme.colors.primary2), 0.4)};
  overflow: hidden;
`;

export default Card;
