import React from 'react';
import useStyles from './deco-style';

function Decoration() {
  const classes = useStyles();
  return (
    <div className={classes.footerDeco}>
      &nbsp;
    </div>
  );
}

export default Decoration;
