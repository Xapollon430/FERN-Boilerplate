import React from 'react';
import useStyles from './deco-style';

function Building() {
  const classes = useStyles();
  return (
    <div className={classes.decoBuilding}>
      <svg width="508px" height="492px" viewBox="0 0 508 492" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g id="deco-building" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g>
            <ellipse className={classes.primaryLight} cx="461" cy="152.5" rx="47" ry="47.5" />
            <circle className={classes.primaryMain} cx="460.5" cy="152.5" r="27.5" />
            <polygon className={classes.secondaryLight} points="286.097754 0 286.097754 121.721472 98.9114927 121.721472" />
            <polygon className={classes.accentDark} points="286.097754 38.8932515 335.774108 38.8932515 286.097754 121.721472" />
            <ellipse className={classes.secondaryMainStroke} strokeWidth="10" cx="331.771466" cy="393.253988" rx="38.1968296" ry="36.7742331" />
            <rect className={classes.secondaryLight} x="244.340819" y="391.813497" width="169.90753" height="100.11411" />
            <path d="M43.4755614,323.927607 L229.475561,323.927607 C284.704036,323.927607 329.475561,368.699132 329.475561,423.927607 L329.475561,491.927607 L329.475561,491.927607 L43.4755614,491.927607 L43.4755614,323.927607 Z" className={classes.primaryLight} transform="translate(186.475561, 407.927607) scale(-1, 1) translate(-186.475561, -407.927607) " />
            <rect className={classes.secondaryDark} x="0.278731836" y="234.8" width="44.6367239" height="44.6552147" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default Building;
