import React from 'react';
import ReactWOW from 'react-wow';
import useStyles from './footer-deco-style';
import imgAPI from '~/public/images/imgAPI';

function DecorationTop() {
  const classes = useStyles();
  return (
    <div className={classes.topDeco}>
      <ReactWOW animation="zoomInShort" delay="0.2s" offset={-300} duration="0.3s">
        <img
          src={imgAPI.education[44]}
          data-2d={imgAPI.education[43]}
          data-3d={imgAPI.education[44]}
          className="img-2d3d"
          alt="footer"
        />
      </ReactWOW>
    </div>
  );
}

export default DecorationTop;
