import React from 'react';
import Container from 'components/Container';
import Link from 'components/Link';

const PageNotFound = () => (
  <Container py="2em">
    <h1>404 &mdash; page not found</h1>
    <p>
      Perhaps the page you requested was moved or deleted.
      It is also possible that you made a small typo when entering the address.
    </p>
    <p>
      You can do the following:
      <br />
      &mdash; Go to <Link to="/">home page</Link>
    </p>
  </Container>
);

export default PageNotFound;
