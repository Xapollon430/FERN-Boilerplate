import React from 'react';
import MainFeature from './MainFeature';
import MoreFeature from './MoreFeature';
import useStyles from './feature-style';

export default function Feature() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MainFeature />
      <MoreFeature />
    </div>
  );
}
