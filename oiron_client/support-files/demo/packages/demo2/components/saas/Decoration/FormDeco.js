import React from 'react';
import useStyles from './decoration-style';

export default function FormDeco() {
  const classes = useStyles();
  return (
    <div className={classes.formDeco}>
      <div className={classes.topDeco}>
        <svg className={classes.wave}>
          <use xlinkHref="/images/saas/deco-top.svg#main" />
        </svg>
      </div>
    </div>
  );
}
