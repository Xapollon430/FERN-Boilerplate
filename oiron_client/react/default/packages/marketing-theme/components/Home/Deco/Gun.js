import React from 'react';
import useStyles from './deco-style';

function Gun() {
  const classes = useStyles();
  return (
    <div className={classes.decoGun}>
      <svg width="222px" height="297px" viewBox="0 0 222 297" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="gun" transform="translate(10.000000, 0.000000)">
            <rect className={classes.primaryLightStroke} strokeWidth="10" x="-5" y="81" width="82" height="83" />
            <rect className={classes.accentMain} x="81" y="0" width="72" height="73" />
            <polygon className={classes.secondaryLight} points="81.0333112 165 212 297 81 297" />
            <circle className={classes.secondaryMain} transform="translate(153.000000, 237.000000) scale(-1, 1) translate(-153.000000, -237.000000) " cx="153" cy="237" r="31" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default Gun;
