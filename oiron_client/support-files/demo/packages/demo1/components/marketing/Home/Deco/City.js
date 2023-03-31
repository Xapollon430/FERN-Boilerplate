import React from 'react';
import useStyles from './deco-style';

function City() {
  const classes = useStyles();
  return (
    <div className={classes.decoCity}>
      <svg width="526px" height="301px" viewBox="0 0 526 301" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="city">
            <rect className={classes.secondaryLight} x="204" y="239" width="62" height="62" />
            <polygon className={classes.secondaryDark} points="131.024411 239 227 301 131 301" />
            <polygon className={classes.secondaryMain} transform="translate(428.000000, 270.000000) scale(1, -1) translate(-428.000000, -270.000000) " points="397 301 397.586418 301 412.792573 285.170213 428 269.341694 443.206155 285.170213 458.41231 301 459 301 459 239 397 239" />
            <rect className={classes.secondaryMainStroke} strokeWidth="10" x="459" y="177" width="62" height="62" />
            <polygon className={classes.primaryLight} fillRule="nonzero" points="397 169 266 301 397 301" />
            <circle className={classes.secondaryMain} cx="142" cy="23" r="23" />
            <polygon className={classes.accentMain} fillRule="nonzero" transform="translate(38.000000, 204.000000) scale(1, -1) translate(-38.000000, -204.000000) " points="69 169 7 239 69 239" />
            <polygon className={classes.accentLight} fillRule="nonzero" points="131 169 0 301 131 301" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default City;
