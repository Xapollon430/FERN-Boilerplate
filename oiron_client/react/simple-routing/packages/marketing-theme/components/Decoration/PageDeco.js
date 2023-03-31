import React from 'react';
import useStyles from './decoration-style';
import GunDeco from '../Home/Deco/Gun';
import StairDeco from '../Home/Deco/Stair';

export default function FormDeco() {
  const classes = useStyles();
  return (
    <div className={classes.pageDeco}>
      <div className={classes.leftDeco}>
        <GunDeco />
      </div>
      <div className={classes.rightDeco}>
        <StairDeco />
      </div>
    </div>
  );
}
