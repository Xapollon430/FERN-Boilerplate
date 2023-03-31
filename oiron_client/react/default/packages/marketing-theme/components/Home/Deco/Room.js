import React from 'react';
import useStyles from './deco-style';

function Room() {
  const classes = useStyles();
  return (
    <div className={classes.decoRoom}>
      <svg width="410px" height="372px" viewBox="0 0 410 372" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g id="deco_room" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g>
            <ellipse className={classes.secondaryMainStroke} strokeWidth="10" cx="314.253369" cy="296.238436" rx="27.9375826" ry="26.9485243" />
            <ellipse className={classes.primaryLight} cx="191.925" cy="55.829685" rx="25.925" ry="26.002867" />
            <path d="M191.925,0 L309.313045,0 C364.54152,-2.4356161e-14 409.313045,44.771525 409.313045,100 L409.313045,163.047642 L409.313045,163.047642 L191.925,163.047642 L191.925,0 Z" className={classes.secondaryLight} />
            <ellipse className={classes.secondaryDark} cx="335.938047" cy="279.366717" rx="13.2911392" ry="13.25" />
            <polygon className={classes.accentDark} transform="translate(150.207883, 320.870120) scale(-1, 1) translate(-150.207883, -320.870120) " points="200.224349 371.116667 200.224349 270.623574 100.191417 270.623574" />
            <polygon className={classes.secondaryLight} transform="translate(50.174951, 320.870120) scale(-1, 1) translate(-50.174951, -320.870120) " points="0.183921873 270.623574 100.191417 371.116667 0.158485129 371.116667" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default Room;
