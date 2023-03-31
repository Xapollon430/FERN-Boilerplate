import React from 'react';
import useStyles from './deco-style';

function Mountain() {
  const classes = useStyles();
  return (
    <div className={classes.decoMountain}>
      <svg width="304px" height="342px" viewBox="0 0 304 342" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g id="mountain_deco" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g>
            <polygon className={classes.secondaryMain} fillRule="nonzero" transform="translate(70.500000, 166.846154) scale(-1, 1) translate(-70.500000, -166.846154) " points="141 95.7692308 0 237.923077 141 237.923077" />
            <path d="M263,177.484794 L304,177.484794 L304,177.484794 L304,341.703041 L163,341.703041 L163,277.484794 C163,222.256319 207.771525,177.484794 263,177.484794 Z" className={classes.accentLight} transform="translate(233.500000, 259.593918) scale(-1, 1) translate(-233.500000, -259.593918) " />
            <circle className={classes.primaryLight} cx="193" cy="36.5" r="36" />
            <circle className={classes.primaryMain} cx="193" cy="36.5" r="21" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default Mountain;
