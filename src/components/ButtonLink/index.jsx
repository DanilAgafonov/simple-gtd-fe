import React from 'react';
import Button from 'components/Button';
import Link from 'components/Link';

const BaseLink = (props) => {
  const next = { ...props };
  delete next.big;
  delete next.squared;
  delete next.fullWidth;

  return (
    <Link {...next} />
  );
};

export default Button.withComponent(BaseLink);
