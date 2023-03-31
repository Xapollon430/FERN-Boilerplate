import React from 'react';
import useStyles from './deco-style';

function Plane() {
  const classes = useStyles();
  return (
    <div className={classes.decoPlane}>
      <svg width="601px" height="245px" viewBox="0 0 601 245" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="plane" transform="translate(5.000000, 0.000000)">
            <polygon className={classes.accentMain} points="527 76 527 245 267 245" />
            <rect className={classes.primaryMain} x="527" y="27" width="51" height="49" />
            <rect className={classes.secondaryMainStroke} strokeWidth="10" x="0" y="178" width="62" height="62" />
            <polygon className={classes.accentLight} points="527 130 596 130 527 245" />
            <polygon className={classes.primaryLight} fillRule="nonzero" transform="translate(183.500000, 165.500000) scale(-1, -1) translate(-183.500000, -165.500000) " points="108 123 259 208 108 208" />
            <polygon className={classes.secondaryLight} points="65.5 123 79.3704152 128.125353 93.239559 133.251978 100.620415 146.23129 108 159.211874 105.436726 173.971264 102.873452 188.731926 80.260441 208 50.7408305 208 28.1265482 188.731926 25.5632741 173.971264 23 159.211874 30.3808562 146.23129 37.760441 133.251978 51.6308562 128.125353" />
            <path d="M497,0.655214724 L501,0.655214724 C515.359403,0.655214724 527,12.2958112 527,26.6552147 L527,26.6552147 L527,26.6552147 L497,26.6552147 L497,0.655214724 Z" className={classes.secondaryMain} transform="translate(512.000000, 13.655215) scale(-1, 1) translate(-512.000000, -13.655215) " />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default Plane;
