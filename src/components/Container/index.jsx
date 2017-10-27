import { Box } from 'grid-styled';

const Container = Box.extend.attrs({
  width: [1, '540px', '720px', '960px', '1140px'],
  m: '0 auto',
})`
  padding-right: 1em;
  padding-left: 1em;
`;

export default Container;
