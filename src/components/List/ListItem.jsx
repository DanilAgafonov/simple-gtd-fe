import { Box } from 'grid-styled';

const ListItem = Box.extend`
  padding: 0.5em 1em;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export default ListItem;
