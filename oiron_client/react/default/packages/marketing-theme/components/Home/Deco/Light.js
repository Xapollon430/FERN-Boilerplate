import React from 'react';
import useStyles from './deco-style';

function Light() {
  const classes = useStyles();
  return (
    <div className={classes.decoLight}>
      <svg width="256px" height="249px" viewBox="0 0 256 249" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g id="deco-light" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g>
            <path d="M128.536205,86.951552 L170.136093,86.951552 L170.136093,86.951552 L170.136093,248.127127 L28.536205,248.127127 L28.536205,186.951552 C28.536205,131.723077 73.30773,86.951552 128.536205,86.951552 Z" className={classes.accentLight} />
            <polygon className={classes.secondaryLight} transform="translate(212.775060, 42.858051) scale(-1, 1) translate(-212.775060, -42.858051) " points="255.473995 -3.15937752e-14 255.473995 85.7161014 170.076125 85.7161014" />
            <polygon className={classes.secondaryMain} transform="translate(233.854671, 21.342857) scale(-1, 1) translate(-233.854671, -21.342857) " points="255.114187 0 255.114187 42.6857143 212.595156 42.6857143" />
            <g transform="translate(-75.000000, -3203.000000)" className={classes.primaryMain}>
              <g transform="translate(0.000000, 2843.000000)">
                <g transform="translate(75.000000, 274.000000)">
                  <g>
                    <path d="M8.82900417,95.0103308 L48.2434059,95.0103308 L48.2434059,133.838992 L8.82900417,133.838992 L8.82900417,95.0103308 Z M0.0702482381,86.951552 L57.0021618,86.951552 L57.0021618,142.630387 L0.0702482381,142.630387 L0.0702482381,86.951552 Z" />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

export default Light;
