import React from 'react';
import useStyles from './deco-style';

function Stair() {
  const classes = useStyles();
  return (
    <div className={classes.decoStair}>
      <svg width="200px" height="255px" viewBox="0 0 200 255" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="stair">
            <rect className={classes.primaryLight} x="131" y="61" width="69" height="62" />
            <rect className={classes.secondaryMain} x="62" y="61" width="69" height="62" />
            <rect className={classes.secondaryMain} x="131" y="0" width="69" height="62" />
            <path d="M20.1771664,143.331191 L110.821538,143.331191 L110.821538,234.667504 L20.1771664,234.667504 L20.1771664,143.331191 Z M0,123 L131,123 L131,255 L0,255 L0,123 Z" className={classes.primaryLight} />
            <polygon className={classes.accentMain} fillRule="nonzero" points="0 254 62 185 0 185" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default Stair;
