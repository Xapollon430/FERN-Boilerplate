import React from 'react';
import clsx from 'clsx';
import useStyles from './decoration-style';

export default function FormDeco() {
  const classes = useStyles();
  return (
    <div className={classes.cloudDeco}>
      <div className={classes.leftDeco}>
        <svg className={clsx(classes.cloud, classes.big)}>
          <use xlinkHref="/images/cloud/cloud_deco.svg#main" />
        </svg>
        <svg className={clsx(classes.cloud, classes.small)}>
          <use xlinkHref="/images/cloud/cloud_deco.svg#main" />
        </svg>
      </div>
      <div className={classes.rightDeco}>
        <svg className={clsx(classes.cloud, classes.big)}>
          <use xlinkHref="/images/cloud/cloud_deco.svg#main" />
        </svg>
        <svg className={clsx(classes.cloud, classes.small)}>
          <use xlinkHref="/images/cloud/cloud_deco.svg#main" />
        </svg>
      </div>
    </div>
  );
}
