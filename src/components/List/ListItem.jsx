import { Box } from 'grid-styled';

const ListItem = Box.withComponent('button').extend`
  padding: 0.5em 1em;
  cursor: pointer;
  background: none;
  border: none;
  color: inherit;
  font-size: 1em;
  font-family: inherit;
  font-weight: inherit;
  text-align: left;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export default ListItem;
