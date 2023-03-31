import React from 'react';
import useStyles from './decoration-style';

export default function FormDeco() {
  const classes = useStyles();
  return (
    <div className={classes.decoration}>
      <div className={classes.decoTop}>
        <div className={classes.capsul} />
        <div className={classes.circle} />
      </div>
      <div className={classes.decoBottom}>
        <div className={classes.capsul} />
        <div className={classes.circle} />
      </div>
    </div>
  );
}
