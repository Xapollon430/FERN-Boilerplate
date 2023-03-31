import React from 'react';
import useStyles from './decoration-style';

export default function FormDeco() {
  const classes = useStyles();
  return (
    <div className={classes.decoration}>
      <svg className={classes.leftDeco}>
        <use xlinkHref="/images/saas2/deco-bg-left.svg#main" />
      </svg>
      <svg className={classes.rightDeco}>
        <use xlinkHref="/images/saas2/deco-bg-right.svg#main" />
      </svg>
    </div>
  );
}
