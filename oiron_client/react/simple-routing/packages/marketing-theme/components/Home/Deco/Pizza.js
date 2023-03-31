import React from 'react';
import useStyles from './deco-style';

function Pizza() {
  const classes = useStyles();
  return (
    <div className={classes.decoPizza}>
      <svg width="218px" height="227px" viewBox="0 0 218 227" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="pizza">
            <ellipse className={classes.secondaryMain} cx="141.755725" cy="74.3076923" rx="24.7557252" ry="24.7692308" />
            <polygon className={classes.accentLight} fillRule="nonzero" points="143 0 0 136 143 136" />
            <path d="M218,136 L218,136 L218,136 L218,227 L143,227 L143,211 C143,169.578644 176.578644,136 218,136 Z" className={classes.secondaryLight} transform="translate(180.500000, 181.500000) scale(-1, -1) translate(-180.500000, -181.500000) " />
            <circle className={classes.primaryMain} cx="71.4042553" cy="182" r="30" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default Pizza;
