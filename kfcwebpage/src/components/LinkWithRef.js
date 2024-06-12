// src/components/LinkWithRef.js

import React, { useContext } from 'react';
import { Link, __RouterContext } from 'react-router-dom'; // Import __RouterContext

const LinkWithRef = React.forwardRef(({ to, ...rest }, ref) => {
  const routerContext = useContext(__RouterContext); // Use __RouterContext

  if (!routerContext) {
    // Handle the case when the context is null
    return null;
  }

  const {
    history: { basename },
  } = routerContext;

  return (
    <Link ref={ref} to={`${basename}${to}`} {...rest} />
  );
});

export default LinkWithRef;
