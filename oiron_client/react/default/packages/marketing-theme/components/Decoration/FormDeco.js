import React from 'react';
import useStyles from './decoration-style';
import PizzaDeco from '../Home/Deco/Pizza';
import StairDeco from '../Home/Deco/Stair';

export default function FormDeco() {
  const classes = useStyles();
  return (
    <div className={classes.formDeco}>
      <div className={classes.leftDeco}>
        <PizzaDeco />
      </div>
      <div className={classes.rightDeco}>
        <StairDeco />
      </div>
    </div>
  );
}
