import React from 'react';
import clsx from 'clsx';
import useStyles from './deco-style';

function Decoration() {
  const classes = useStyles();
  return (
    <div className={classes.footerDeco}>
      <div className={classes.decoWrap}>
        <div className={clsx(classes.deco, classes.bottom)}>
          <svg className={classes.wave}>
            <use xlinkHref="/images/saas2/deco-wave.svg#main" />
          </svg>
        </div>
        <div className={clsx(classes.deco, classes.top)}>
          <div className={clsx(classes.wave, classes.waveCover)} />
        </div>
      </div>
      <div className={clsx(classes.wave, classes.waveCover)} />
    </div>
  );
}

export default Decoration;
